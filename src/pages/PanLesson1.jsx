import { Link } from "react-router-dom";

export default function PanLesson1() {
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

      <h2>Lesson 1 : PAN Card Registration</h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        A Permanent Account Number (PAN) is a unique 10-character alphanumeric
        identification issued by the Income Tax Department of India. It is
        essential for financial transactions, filing income tax returns,
        opening bank accounts, and many other government and banking services.

        <br /><br />

        Individuals can apply for a new PAN Card online through the official
        NSDL or UTIITSL portals or by visiting authorized PAN service centers.
        Applicants are required to provide identity proof, address proof,
        date of birth proof, passport-size photographs, and other supporting
        documents.

        <br /><br />

        After successful verification and payment of the application fee,
        applicants receive an acknowledgement number that can be used to
        track the application status. The PAN Card is then dispatched to the
        registered address or made available digitally through e-PAN services.
      </p>

      <h2 style={{ marginTop: "35px" }}>Documents Required</h2>

      <ul
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Proof of Identity (Aadhaar, Passport, Voter ID, etc.)</li>
        <li>Proof of Address</li>
        <li>Date of Birth Proof</li>
        <li>Passport-size Photograph</li>
        <li>Active Mobile Number & Email ID</li>
      </ul>

      <h2 style={{ marginTop: "35px" }}>Registration Process</h2>

      <ol
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Visit the official NSDL or UTIITSL website.</li>
        <li>Select the option to apply for a new PAN Card.</li>
        <li>Fill in the online application form.</li>
        <li>Upload the required documents.</li>
        <li>Pay the application fee.</li>
        <li>Submit the application.</li>
        <li>Save the acknowledgement number.</li>
        <li>Track the PAN application status online.</li>
      </ol>

      <div style={{ marginTop: "40px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/BtUIy_Vnk-8"
          title="PAN Card Registration"
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
        <Link to="/course/pan">
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

        <Link to="/course/pan/lesson2">
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            Next →
          </button>
        </Link>
      </div>
    </div>
  );
}