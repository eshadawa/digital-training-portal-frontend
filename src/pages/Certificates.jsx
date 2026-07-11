import { Link } from "react-router-dom";

export default function Certificates() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#1e3a8a",
        }}
      >
        📜 My Certificates
      </h1>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,.12)",
        }}
      >
        <h2>DigiLocker Training</h2>

        <p>
          <strong>Student :</strong> {user?.name}
        </p>

        <p>
          <strong>Status :</strong>
          <span style={{ color: "green" }}>
            {" "}Completed ✅
          </span>
        </p>

        <p>
          <strong>Certificate Available</strong>
        </p>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "15px",
          }}
        >
          <Link to="/certificate">
            <button
              style={{
                padding: "12px 25px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View Certificate
            </button>
          </Link>

          <Link to="/">
            <button
              style={{
                padding: "12px 25px",
                background: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}