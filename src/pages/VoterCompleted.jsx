import { Link, useNavigate } from "react-router-dom";

export default function VoterCompleted() {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "Student";

  const navigate = useNavigate();

  const handleDownload = () => {
    localStorage.setItem("voterCompleted", "true");
    navigate("/voter-certificate");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef2ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            color: "#16a34a",
            fontSize: "55px",
            marginBottom: "10px",
          }}
        >
          🎉 Congratulations!
        </h1>

        <h2>Hello, {name}</h2>

        <p
          style={{
            fontSize: "28px",
            marginTop: "25px",
          }}
        >
          You have successfully completed the
        </p>

        <h2
          style={{
            color: "#2563eb",
            marginTop: "10px",
            fontSize: "40px",
          }}
        >
          Voter ID Training Course
        </h2>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "35px",
          }}
        >
          Your certificate is ready.
        </p>

        <button
          onClick={handleDownload}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "18px 45px",
            borderRadius: "10px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          Download Certificate
        </button>

        <br />
        <br />

        <Link to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}