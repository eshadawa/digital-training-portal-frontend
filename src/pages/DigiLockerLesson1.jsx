import { Link } from "react-router-dom";

export default function DigiLockerLesson1() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Course Curriculum</h1>

      <h2>Lesson 1 : What is DigiLocker?</h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        DigiLocker is a flagship initiative of the Government of India under
        the Digital India Programme. It provides every citizen with a secure
        cloud-based platform where important documents like Aadhaar Card, PAN
        Card, Driving Licence, Vehicle RC, Educational Certificates, Insurance
        Documents and many more can be stored digitally.

        <br /><br />

        DigiLocker eliminates the need to carry physical documents because the
        digital copies available inside DigiLocker are legally valid and are
        accepted by government departments, universities, banks and many
        private organizations.

        <br /><br />

        Every DigiLocker account is linked with Aadhaar and protected using OTP
        authentication making it secure and easy to access anytime from mobile
        or computer.
      </p>

      <div style={{ marginTop: "40px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/roQ-fHoCw_c"
          title="DigiLocker"
          allowFullScreen
        ></iframe>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "40px",
        }}
      >
        <Link to="/course/digilocker/lesson2">
  <button
    style={{
      background: "#2563eb",
      color: "white",
      border: "none",
      padding: "15px 35px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "17px",
    }}
  >
    Next →
  </button>
</Link>
      </div>
    </div>
  );
}