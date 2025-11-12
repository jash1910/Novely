import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      navigate("/"); // back to Home after login
    } catch (err) {
      alert(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-white rounded-xl shadow-sm border border-slate/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate">
          Welcome Back
        </h2>
        <input
          className="w-full border border-slate/20 p-3 mb-3 rounded-md focus:outline-none focus:border-rose"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full border border-slate/20 p-3 mb-6 rounded-md focus:outline-none focus:border-rose"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-rose text-white rounded-md hover:bg-moss transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-center mt-4 text-slate/70">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-rose cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
