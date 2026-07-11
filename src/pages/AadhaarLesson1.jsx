import { Link } from "react-router-dom";

export default function AadhaarLesson1() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
      >
        <h1 style={{ color: "#1d4ed8" }}>
          Lesson 1 : Aadhaar Registration
        </h1>

        <hr />

        <h2>What is Aadhaar?</h2>

        <p>
          Aadhaar is a unique 12-digit identification number issued by
          UIDAI (Unique Identification Authority of India). It is used as
          proof of identity and address for Indian residents.
        </p>

        <h2>Documents Required</h2>

        <ul>
          <li>Proof of Identity (PAN Card, Passport, Driving Licence etc.)</li>
          <li>Proof of Address</li>
          <li>Date of Birth Proof</li>
          <li>Mobile Number</li>
        </ul>

        <h2>How to Register for Aadhaar</h2>

        <ol>
          <li>Visit the nearest Aadhaar Enrolment Centre.</li>
          <li>Fill the Aadhaar Enrolment Form.</li>
          <li>Submit your identity and address documents.</li>
          <li>Complete biometric verification (Fingerprint & Iris).</li>
          <li>Take your photograph.</li>
          <li>Verify all entered details carefully.</li>
          <li>Collect the acknowledgement slip containing the Enrolment ID.</li>
        </ol>

        <h2>Important Points</h2>

        <ul>
          <li>Aadhaar enrolment is completely free.</li>
          <li>Keep your registered mobile number active.</li>
          <li>Use only official UIDAI enrolment centres.</li>
          <li>The acknowledgement slip is required to check Aadhaar status.</li>
        </ul>

        
{/* Video Section */}
<div
  style={{
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <iframe
    width="900"
    height="500"
    src="https://www.youtube.com/embed/EefYzwJ5CbA"
    title="Aadhaar Registration Tutorial"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    style={{
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    }}
  ></iframe>
</div>
          <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
    width: "100%",
  }}
>
  <Link to="/course/aadhaar">
    <button
      style={{
        width: "110px",
        height: "42px",
        background: "#6b7280",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      ← Back
    </button>
  </Link>

  <Link to="/course/aadhaar/lesson2">
    <button
      style={{
        width: "140px",
        height: "50px",
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
    </div>
  );
}