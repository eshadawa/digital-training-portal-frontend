import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

     const res = await axios.post(
  "https://digital-training-backend.onrender.com/api/register",
  formData
);

      // Save token
      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful 🎉");

      console.log("LOGIN RESPONSE:", res.data);

      setTimeout(() => {
        navigate("/");
      }, 800);

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login Failed ❌"
      );

      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <div className="overlay">
          <h1>Digital Training Portal</h1>

          <h2>
            Learn Digital Government
            Services Professionally
          </h2>

          <p>
            DigiLocker, Aadhaar, PAN,
            e-Governance Training &
            Certification Platform
          </p>
        </div>
      </div>

      <div className="login-right">

        <form
          className="login-card"
          onSubmit={handleLogin}
        >
          <h2>Welcome Back 👋</h2>

          <p>
            Login to continue your learning
            journey
          </p>

          <div className="input-group">
            <FaEnvelope className="icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <span
              className="eye"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

          <div className="divider">
            OR
          </div>

          <button
            type="button"
            className="google-btn"
          >
            Continue with Google
          </button>

          <p className="register">
            Don't have an account?
            <span
              onClick={() =>
                navigate("/register")
              }
              style={{
                cursor: "pointer",
              }}
            >
              {" "}
              Register
            </span>
          </p>

        </form>

      </div>

    </div>
  );
}