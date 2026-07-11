import { Link } from "react-router-dom";

export default function AadhaarLesson2() {
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
          Lesson 2 : Update Aadhaar Details
        </h1>

        <hr />

        <h2>Why Update Aadhaar?</h2>

        <p>
          Aadhaar details should always be up to date. If your name, address,
          mobile number or other personal information changes, you should update
          your Aadhaar to continue using government services without issues.
        </p>

        <h2>Details You Can Update</h2>

        <ul>
          <li>Name</li>
          <li>Address</li>
          <li>Date of Birth</li>
          <li>Gender</li>
          <li>Mobile Number</li>
          <li>Email ID</li>
          <li>Photograph</li>
          <li>Biometric Details</li>
        </ul>

        <h2>How to Update Aadhaar</h2>

        <ol>
          <li>Visit the official UIDAI website.</li>
          <li>Login using your Aadhaar Number.</li>
          <li>Verify using OTP sent to your registered mobile number.</li>
          <li>Select the "Update Aadhaar" option.</li>
          <li>Choose the field you want to update.</li>
          <li>Upload valid supporting documents.</li>
          <li>Pay the update fee if required.</li>
          <li>Submit the request.</li>
          <li>Save your Update Request Number (URN).</li>
          <li>Track your update status from the UIDAI portal.</li>
        </ol>

        <h2>Documents Required</h2>

        <ul>
          <li>Proof of Identity (POI)</li>
          <li>Proof of Address (POA)</li>
          <li>Proof of Date of Birth (DOB)</li>
          <li>Registered Mobile Number</li>
        </ul>

        <h2>Important Points</h2>

        <ul>
          <li>Always use the official UIDAI website.</li>
          <li>Upload clear scanned documents.</li>
          <li>Keep your registered mobile number active.</li>
          <li>Save the URN to track update status.</li>
          <li>Some updates may require biometric verification.</li>
        </ul>

        {/* Video */}

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
            src="https://www.youtube.com/embed/Cgmn9Bn8SMQ"
            title="Update Aadhaar Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,.25)",
            }}
          ></iframe>
        </div>

        {/* Buttons */}

        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
    width: "100%",
  }}
>
  <Link to="/course/aadhaar/learn">
    <button
      style={{
        padding: "14px 34px",
        background: "#6b7280",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      ← Back
    </button>
  </Link>

  <Link to="/course/aadhaar/completed">
  <button
    style={{
      padding: "14px 34px",
      background: "#16a34a",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
    }}
  >
    Finish Course ✓
  </button>
</Link>
</div>
      </div>
    </div>
  );
}
