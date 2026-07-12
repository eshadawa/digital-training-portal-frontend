import { Link } from "react-router-dom";

export default function VoterLesson1() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "30px",
        }}
      >
        Voter ID Lesson 1
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,.1)",
        }}
      >
        <h2>Voter ID Registration (New Registration)</h2>

        <p style={{ lineHeight: "30px", fontSize: "18px" }}>
          Learn how to apply for a new Voter ID card online through the
          Election Commission portal.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/QQCrBzWnxtg"
            title="Voter ID Registration"
            allowFullScreen
            style={{ borderRadius: "10px" }}
          />
        </div>

        <div
          style={{
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          <Link to="/course/voter/completed">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "15px 35px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              Complete Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}