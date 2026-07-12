import { Link } from "react-router-dom";

export default function PanLesson2() {
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
        Lesson 2 - Uses of PAN Card
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
          src="https://www.youtube.com/embed/aaqqxUs8nt8"
          title="Uses of PAN Card"
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
        <Link to="/course/pan/learn">
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

        <Link to="/course/pan/completed">
          <button
            style={{
              padding: "14px 34px",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Finish Course ✓
          </button>
        </Link>
      </div>
    </div>
  );
}