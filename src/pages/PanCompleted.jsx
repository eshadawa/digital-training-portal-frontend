import { Link, useNavigate } from "react-router-dom";
export default function PanCompleted() {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "Student";
    const navigate = useNavigate();

const handleDownload = () => {
  console.log("Button clicked");

  localStorage.setItem("panCompleted", "true");

  console.log("Saved:", localStorage.getItem("panCompleted"));

  navigate("/pan-certificate");
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
          background: "white",
          padding: "50px",
          borderRadius: "25px",
          boxShadow: "0 15px 40px rgba(0,0,0,.15)",
          width: "700px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#16a34a",
            fontSize: "52px",
            marginBottom: "10px",
          }}
        >
          🎉 Congratulations!
        </h1>

        <h2
          style={{
            marginBottom: "30px",
            fontSize: "36px",
          }}
        >
          Hello, {name}
        </h2>

        <p
          style={{
            fontSize: "30px",
            lineHeight: "45px",
          }}
        >
          You have successfully completed the
          <br />
          <span
            style={{
              color: "#2563eb",
              fontWeight: "700",
            }}
          >
            PAN Card Training Course
          </span>
        </p>

        <p
          style={{
            fontSize: "24px",
            marginTop: "20px",
          }}
        >
          Your certificate is ready.
        </p>

        <button
  onClick={handleDownload}
  style={{
    marginTop: "35px",
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontSize: "22px",
    cursor: "pointer",
  }}
>
  Download Certificate
</button>

        <br />

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "30px",
            fontSize: "20px",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}