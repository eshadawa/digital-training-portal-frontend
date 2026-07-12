import { Link } from "react-router-dom";

export default function VoterCourse() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef5ff",
      }}
    >
      {/* Hero */}

      <div
        style={{
          background: "linear-gradient(90deg,#2563eb,#6d28d9)",
          color: "white",
          padding: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Voter ID Training
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "38px",
            }}
          >
            Learn how to apply for a new Voter ID Card online through the
            Election Commission of India. Understand the registration process,
            eligibility, required documents, and online application steps.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            <div style={badgeStyle}>
              ⭐ 4.9 Rating
            </div>

            <div style={badgeStyle}>
              👨‍🎓 8,500 Learners
            </div>

            <div style={badgeStyle}>
              ⏱ 15 Minutes
            </div>

            <div style={badgeStyle}>
              🟢 Beginner
            </div>
          </div>

          <div
            style={{
              marginTop: "45px",
              display: "flex",
              gap: "20px",
            }}
          >
            <Link to="/course/voter/learn">
              <button style={startBtn}>
                Start Learning
              </button>
            </Link>

            <button style={notesBtn}>
              Download Notes
            </button>
          </div>
        </div>

        <img
          src="https://img.youtube.com/vi/QQCrBzWnxtg/hqdefault.jpg"
          alt="Voter ID Training"
          style={{
            width: "500px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,.3)",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
}

const badgeStyle = {
  background: "rgba(255,255,255,.18)",
  padding: "12px 22px",
  borderRadius: "50px",
  fontSize: "20px",
};

const startBtn = {
  background: "white",
  color: "#2563eb",
  border: "none",
  padding: "18px 35px",
  borderRadius: "12px",
  fontSize: "24px",
  cursor: "pointer",
  fontWeight: "600",
};

const notesBtn = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "18px 35px",
  borderRadius: "12px",
  fontSize: "24px",
  cursor: "pointer",
};