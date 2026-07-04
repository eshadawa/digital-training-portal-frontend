import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";


/* ---------------- HOME ---------------- */
function Home({ courses }) {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: "#30436eff",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Digital Training Portal</h2>

        <div>
  <Link to="/" style={navLinkStyle}>Home</Link>

  <Link to="/courses" style={navLinkStyle}>Courses</Link>

  <span style={{ marginRight: "20px", cursor: "pointer" }}>
    Certificates
  </span>

  {localStorage.getItem("token") ? (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  ) : (
    <Link to="/login" style={{ color: "white" }}>
      Login
    </Link>
  )}
</div>
      </nav>

      {/* Hero Section */}
      <section
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
      </section>

      {/* Courses Section */}
      <section
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
      <footer
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
    axios
      .get("https://digital-training-backend.onrender.com/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
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