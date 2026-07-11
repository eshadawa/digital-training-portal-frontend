import { Link } from "react-router-dom";

export default function DigiLockerLesson3() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>
        Course Curriculum
      </h1>

      <h2 style={{ marginTop: "20px" }}>
        Lesson 3 : ABC ID (APAAR ID)
      </h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
          textAlign: "justify",
        }}
      >
        The Academic Bank of Credits (ABC), also known as APAAR ID,
        is an initiative introduced under the National Education Policy
        (NEP 2020) by the Government of India.

        <br /><br />

        ABC ID provides every student with a unique academic identity.
        It securely stores academic credits earned from schools,
        colleges and universities in digital form.

        <br /><br />

        Students can easily transfer their credits between institutions,
        continue higher education and access their academic records
        whenever required.

        <br /><br />

        DigiLocker plays an important role in generating and linking
        your APAAR ID. Once your DigiLocker account is verified,
        you can create your APAAR ID and securely access all your
        educational records online.

        <br /><br />

        APAAR ID helps in maintaining a lifelong academic record,
        simplifies admission procedures and supports digital education
        initiatives across India.

        <br /><br />

        Every student is encouraged to create an APAAR ID because it
        ensures secure, paperless and easily accessible academic
        documentation throughout their educational journey.
      </p>

      <div style={{ marginTop: "40px" }}>
        <iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/Eul8qfvyddM"
  title="APAAR ID"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
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
        <Link to="/course/digilocker/lesson2">
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

        <Link to="/course/digilocker/completed">
          <button
            style={{
              padding: "15px 35px",
              border: "none",
              borderRadius: "10px",
              background: "#16a34a",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Finish ✓
          </button>
        </Link>
      </div>
    </div>
  );
}