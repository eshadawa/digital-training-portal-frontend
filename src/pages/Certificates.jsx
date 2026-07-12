import { Link } from "react-router-dom";

export default function Certificates() {
  const user = JSON.parse(localStorage.getItem("user"));

  const digilockerCompleted =
    localStorage.getItem("digilockerCompleted") === "true";

  const aadhaarCompleted =
    localStorage.getItem("aadhaarCompleted") === "true";

  const panCompleted =
    localStorage.getItem("panCompleted") === "true";
  
  const voterCompleted =
  localStorage.getItem("voterCompleted") === "true";

  const cardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,.12)",
    marginBottom: "25px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

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
          color: "#1e3a8a",
          marginBottom: "40px",
        }}
      >
        📜 My Certificates
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >

        {digilockerCompleted && (
          <div style={cardStyle}>
            <h2>DigiLocker Training</h2>

            <p><strong>Student:</strong> {user?.name}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green" }}>Completed ✅</span>
            </p>

            <Link to="/certificate">
              <button style={buttonStyle}>View Certificate</button>
            </Link>
          </div>
        )}

        {aadhaarCompleted && (
          <div style={cardStyle}>
            <h2>Aadhaar Training</h2>

            <p><strong>Student:</strong> {user?.name}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green" }}>Completed ✅</span>
            </p>

            <Link to="/aadhaar-certificate">
              <button style={buttonStyle}>View Certificate</button>
            </Link>
          </div>
        )}

        {panCompleted && (
          <div style={cardStyle}>
            <h2>PAN Card Training</h2>

            <p><strong>Student:</strong> {user?.name}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green" }}>Completed ✅</span>
            </p>

            <Link to="/pan-certificate">
              <button style={buttonStyle}>View Certificate</button>
            </Link>
          </div>
        )}
        {voterCompleted && (
  <div style={cardStyle}>
    <h2>Voter ID Training</h2>

    <p><strong>Student:</strong> {user?.name}</p>

    <p>
      <strong>Status:</strong>{" "}
      <span style={{ color: "green" }}>Completed ✅</span>
    </p>

    <Link to="/voter-certificate">
      <button style={buttonStyle}>
        View Certificate
      </button>
    </Link>
  </div>
)}

        <div style={{ textAlign: "center", marginTop: "40px" }}>
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