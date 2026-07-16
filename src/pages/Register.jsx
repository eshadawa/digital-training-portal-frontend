import { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(res.data.message || "Registration Successful 🎉");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="register-overlay">
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

      <div className="register-right">
        <form
          className="register-card"
          onSubmit={handleSubmit}
        >
          <h2>Create Account 🚀</h2>

          <p>
            Start your digital learning journey today
          </p>

          <div className="register-input-group">
            <FaUser className="register-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <FaEnvelope className="register-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-input-group">
            <FaLock className="register-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="register-eye"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <div className="register-input-group">
            <FaLock className="register-icon" />

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <span
              className="register-eye"
              onClick={() =>
                setShowConfirm(!showConfirm)
              }
            >
              {showConfirm ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <button
            className="register-btn"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          <p className="login-link">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
            >
              {" "}Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}