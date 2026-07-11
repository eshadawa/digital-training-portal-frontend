import { Link } from "react-router-dom";

export default function DigiLockerLesson2() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>Course Curriculum</h1>

      <h2 style={{ marginTop: "20px" }}>
        Lesson 2 : Creating a DigiLocker Account
      </h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
          textAlign: "justify",
        }}
      >
        In this lesson, you will learn how to create your DigiLocker account
        step by step. DigiLocker allows Indian citizens to securely access,
        store, and share government-issued documents online.

        <br /><br />

        To create an account, visit the official DigiLocker website or install
        the DigiLocker mobile application from the Google Play Store or Apple
        App Store.

        <br /><br />

        Click on <strong>Sign Up</strong>, enter your mobile number and verify it
        using the One Time Password (OTP) sent to your registered mobile number.

        <br /><br />

        After verification, create a username and password. You can then link
        your Aadhaar number to automatically fetch government-issued documents
        such as Aadhaar Card, Driving Licence, Vehicle Registration Certificate,
        Educational Certificates and more.

        <br /><br />

        Once registration is completed successfully, your DigiLocker account is
        ready to use. You can now upload personal documents, share them with
        institutions and access them anytime from anywhere.
      </p>

      <div style={{ marginTop: "40px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/r92qhD2upNg"
          title="Create DigiLocker Account"
          allowFullScreen
        ></iframe>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <Link to="/course/digilocker/learn">
          <button
            style={{
              padding: "15px 35px",
              border: "none",
              borderRadius: "10px",
              background: "#6b7280",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ← Previous
          </button>
        </Link>

        <Link to="/course/digilocker/lesson3">
          <button
            style={{
              padding: "15px 35px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Next →
          </button>
        </Link>
      </div>
    </div>
  );
}