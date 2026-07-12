import { Link } from "react-router-dom";

export default function PanLesson1() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef2ff",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#1e3a8a",
        }}
      >
        Lesson 1 - PAN Card Registration
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          width="960"
          height="540"
          src="https://www.youtube.com/embed/BtUIy_Vnk-8"
          title="PAN Card Registration"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,.2)",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/course/pan">
          <button
            style={{
              padding: "14px 34px",
              background: "#6b7280",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ← Back
          </button>
        </Link>

        <Link to="/course/pan/lesson2">
          <button
            style={{
              padding: "14px 34px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Next →
          </button>
        </Link>
      </div>
    </div>
  );
}