import { Link } from "react-router-dom";

export default function AadhaarLesson1() {
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

      <h2>Lesson 1 : Aadhaar Registration</h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        Aadhaar is a unique 12-digit identification number issued by the
        Unique Identification Authority of India (UIDAI). It serves as proof of
        identity and address and is widely used for accessing various government
        and private services.

        <br /><br />

        To enroll for Aadhaar, an individual must visit an authorized Aadhaar
        Enrolment Centre with valid Proof of Identity (POI), Proof of Address
        (POA), Date of Birth (DOB) documents, and a mobile number.

        <br /><br />

        During enrollment, biometric information such as fingerprints, iris
        scan, and a photograph is captured. After successful verification, an
        acknowledgement slip containing the Enrolment ID (EID) is provided,
        which can be used to track Aadhaar generation status.

        <br /><br />

        Aadhaar enrollment is completely free of cost. Citizens should always
        use official UIDAI centres and keep their registered mobile number
        active for receiving OTPs and important updates.
      </p>

      <h2 style={{ marginTop: "35px" }}>Documents Required</h2>

      <ul
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Proof of Identity (PAN Card, Passport, Driving Licence etc.)</li>
        <li>Proof of Address</li>
        <li>Date of Birth Proof</li>
        <li>Registered Mobile Number</li>
      </ul>

      <h2 style={{ marginTop: "35px" }}>Registration Process</h2>

      <ol
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Visit the nearest Aadhaar Enrolment Centre.</li>
        <li>Fill out the Aadhaar Enrolment Form.</li>
        <li>Submit the required documents.</li>
        <li>Complete fingerprint and iris verification.</li>
        <li>Capture your photograph.</li>
        <li>Verify all entered details.</li>
        <li>Collect the acknowledgement slip with Enrolment ID.</li>
      </ol>

      <div style={{ marginTop: "40px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/EefYzwJ5CbA"
          title="Aadhaar Registration"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
        <Link to="/course/aadhaar">
          <button
            style={{
              background: "#6b7280",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
            }}
          >
            ← Back
          </button>
        </Link>

        <Link to="/course/aadhaar/lesson2">
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