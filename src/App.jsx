import "./Navbar.css";
import {
  FaHome,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";
import DigiLockerCourse from "./pages/DigiLockerCourse";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DigiLockerLearning from "./pages/DigiLockerLearning";
import DigiLockerLesson1 from "./pages/DigiLockerLesson1";
import DigiLockerLesson2 from "./pages/DigiLockerLesson2";
import DigiLockerLesson3 from "./pages/DigiLockerLesson3";
import CourseCompleted from "./pages/CourseCompleted";
import CertificatePage from "./pages/CertificatePage";
import Certificates from "./pages/Certificates";
import AadhaarCourse from "./pages/AadhaarCourse";
import AadhaarLesson1 from "./pages/AadhaarLesson1";
import AadhaarLesson2 from "./pages/AadhaarLesson2";
import AadhaarCompleted from "./pages/AadhaarCompleted";
import AadhaarCertificate from "./pages/AadhaarCertificate";
import PanCourse from "./pages/PanCourse";
import PanLesson1 from "./pages/PanLesson1";
import PanLesson2 from "./pages/PanLesson2";
import PanCompleted from "./pages/PanCompleted";
import PanCertificate from "./pages/PanCertificate";
import VoterCourse from "./pages/VoterCourse";
import VoterLesson1 from "./pages/VoterLesson1";
import VoterCompleted from "./pages/VoterCompleted";
import VoterCertificate from "./pages/VoterCertificate";

/* ---------------- HOME ---------------- */
function Home({ courses }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <div>
      {menuOpen && (
  <div
    className="overlay"
    onClick={() => setMenuOpen(false)}
  ></div>
)}
      {/* Navbar */}
      <nav className="navbar">
        <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
  <h2 className="logo">Digital Training Portal</h2>

  <div className={`nav-right ${menuOpen ? "active" : ""}`}>
    <span className="welcome-text">
      Welcome, {user?.name} 👋
    </span>

    <Link
  to="/"
  className={`nav-link ${
    location.pathname === "/" ? "active-link" : ""
  }`}
  onClick={() => setMenuOpen(false)}
>
  <FaHome /> Home
</Link>

    <Link
  to="/courses"
  className={`nav-link ${
    location.pathname === "/courses" ? "active-link" : ""
  }`}
  onClick={() => setMenuOpen(false)}
>
  <FaBookOpen /> Courses
</Link>

    <Link
  to="/certificates"
  className={`nav-link ${
    location.pathname === "/certificates" ? "active-link" : ""
  }`}
  onClick={() => setMenuOpen(false)}
>
  <FaCertificate /> Certificates
</Link>

    {localStorage.getItem("token") ? (
      <button
        className="logout-btn"
        onClick={() => {
          const user = JSON.parse(localStorage.getItem("user"));

          const ok = window.confirm(
            `👋 ${user?.name}\n\nAre you sure you want to logout?`
          );

          if (ok) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            alert("You have been logged out successfully 👋");

            window.location.href = "/login";
          }
        }}
      >
        Logout
      </button>
    ) : (
      <Link to="/login" className="nav-link">
        Login
      </Link>
    )}
  </div>
</nav>

      {/* Hero Section */}
      <section className="hero-section"
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background: "#e0f2fe",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "#000", marginBottom: "25px" }}>
          DigiLocker, Aadhaar & PAN Services Training
        </h1>

        <p style={{ fontSize: "20px", color: "#242121ff", marginBottom: "35px" }}>
          Learn Government Digital Services Professionally
        </p>
        <Link to="/courses">
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Start Learning
          </button>
        </Link>
      </section>

      {/* Courses Section */}
      <section className="courses-section"
        style={{
          display: "flex",
          gap: "25px",
          padding: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "#f8fafc",
          color: "#242121ff",
        }}
      >
        {courses.length === 0 ? (
          <p>Loading courses...</p>
        ) : (
          courses.map((course) => (
            <div
               className="course-card"
                key={course.id}
              style={{
                width: "320px",
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ color: "#000" }}>{course.name}</h2>

              <p>{course.description}</p>

              <Link to={`/course/${course.slug}`}>
                <button
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  View Course
                </button>
              </Link>
            </div>
          ))
        )}
      </section>

      {/* Footer */}
      <footer className="footer"
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 Digital Training Portal
      </footer>
    </div>
  );
}

/* ---------------- DETAIL PAGE ---------------- */
function CourseDetail({ courses }) {
  const { slug } = useParams();

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <h2 style={{ textAlign: "center" }}>Course not found</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <Link to="/">⬅ Back</Link>

      <h1>{course.name}</h1>
      <p>{course.description}</p>

      <h3>Benefits</h3>
      <ul>
        {course.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {course.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------- APP ---------------- */
function CoursesPage({ courses }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        All Courses
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              width: "300px",
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#000" }}>{course.name}</h2>

            <p style={{ color: "#444" }}>{course.description}</p>

            <Link
              to={`/course/${course.slug}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 15px",
                background: "#2563eb",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
function App() {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(
  "https://digital-training-backend.onrender.com/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <Routes>
      <Route
path="/course/digilocker"
element={<DigiLockerCourse/>}
/>
<Route
  path="/course/digilocker/learn"
  element={<DigiLockerLesson1 />}
/>
<Route
  path="/course/aadhaar"
  element={<AadhaarCourse />}
 />

<Route
  path="/course/aadhaar/learn"
  element={<AadhaarLesson1 />}
 />
 <Route
  path="/course/aadhaar/lesson2"
  element={<AadhaarLesson2 />}
/>

<Route
  path="/course/aadhaar/completed"
  element={<AadhaarCompleted />}
/>

<Route
  path="/aadhaar-certificate"
  element={<AadhaarCertificate />}
/>

<Route
  path="/course/pan"
  element={<PanCourse />}
/>

<Route
  path="/course/pan/learn"
  element={<PanLesson1 />}
/>

<Route
  path="/course/pan/lesson2"
  element={<PanLesson2 />}
/>

<Route
  path="/course/pan/completed"
  element={<PanCompleted />}
/>

<Route
  path="/pan-certificate"
  element={<PanCertificate />}
/>

<Route
  path="/course/voterid"
  element={<VoterCourse />}
/>

<Route
  path="/course/voter/learn"
  element={<VoterLesson1 />}
/>

<Route
  path="/course/voter/completed"
  element={<VoterCompleted />}
/>

<Route
  path="/voter-certificate"
  element={<VoterCertificate />}
/>

<Route
  path="/course/digilocker/lesson2"
  element={<DigiLockerLesson2 />}
/>
<Route
  path="/course/digilocker/lesson3"
  element={<DigiLockerLesson3 />}
/>
<Route
path="/course/digilocker/completed"
element={<CourseCompleted />}
/>
<Route
path="/course/digilocker/completed"
element={<CertificatePage/>}
/>
<Route
  path="/certificate"
  element={<CertificatePage />}
/>
<Route
    path="/course/digilocker/learn"
    element={<DigiLockerLearning />}
/>

<Route
  path="/certificates"
  element={
    token
      ? <Certificates />
      : <Navigate to="/login" />
  }
/>
      <Route
        path="/"
        element={
          token
            ? <Home courses={courses} />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/login"
        element={
          token
            ? <Navigate to="/" />
            : <Login />
        }
      />

      <Route
        path="/register"
        element={
          token
            ? <Navigate to="/" />
            : <Register />
        }
      />

      <Route
        path="/courses"
        element={
          token
            ? <CoursesPage courses={courses} />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/course/:slug"
        element={
          token
            ? <CourseDetail courses={courses} />
            : <Navigate to="/login" />
        }
      />
    </Routes>
  );
}   // <-- App function yahan close hoga

const navLinkStyle = {
  marginRight: "20px",
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
};

export default App;