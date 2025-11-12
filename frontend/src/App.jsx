import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-ivory text-slate px-8 py-4 flex items-center justify-between border-b border-slate/10">
      <Link to="/" className="text-2xl font-semibold tracking-wide text-slate">
        Novely
      </Link>
      <div className="flex items-center gap-4">
        {!token ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded-md hover:text-rose transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md bg-rose text-white hover:bg-moss transition-colors"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md bg-rose text-white hover:bg-moss transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
