import { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(form);
      navigate("/login");
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
          Create Account
        </h2>
        <input
          className="w-full border border-slate/20 p-3 mb-3 rounded-md focus:outline-none focus:border-rose"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
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
          {loading ? "Creating..." : "Sign Up"}
        </button>
        <p className="text-center mt-4 text-slate/70">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-rose cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
