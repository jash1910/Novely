import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="overlay" />
      <div className="home-content">
        <h1 className="title">Welcome to Novely</h1>
        <p className="subtitle">Your space to write, read, and grow.</p>
        <button onClick={() => navigate("/login")} className="home-btn">
          Get Started
        </button>
      </div>
    </div>
  );
}
