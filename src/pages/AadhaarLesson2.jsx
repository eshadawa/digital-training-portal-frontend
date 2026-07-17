import { Link } from "react-router-dom";

export default function AadhaarLesson2() {
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

      <h2>Lesson 2 : Update Aadhaar Details</h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        Aadhaar details should always be kept up to date to ensure smooth access
        to government and private services. If your name, address, date of birth,
        mobile number or other personal information changes, you should update
        your Aadhaar through the official UIDAI portal or an Aadhaar Seva Kendra.

        <br /><br />

        Most demographic details can be updated online using OTP verification,
        while biometric updates such as fingerprints, iris scan and photograph
        require a visit to an Aadhaar Enrolment or Update Centre.

        <br /><br />

        After submitting an update request, you receive an Update Request Number
        (URN), which can be used to track the status of your application online.
        Always use valid supporting documents while requesting any update.
      </p>

      <h2 style={{ marginTop: "35px" }}>Details You Can Update</h2>

      <ul
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Name</li>
        <li>Address</li>
        <li>Date of Birth</li>
        <li>Gender</li>
        <li>Mobile Number</li>
        <li>Email ID</li>
        <li>Photograph</li>
        <li>Biometric Details</li>
      </ul>

      <h2 style={{ marginTop: "35px" }}>Update Process</h2>

      <ol
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Visit the official UIDAI website or Aadhaar Seva Kendra.</li>
        <li>Login using your Aadhaar Number.</li>
        <li>Verify using the OTP sent to your registered mobile number.</li>
        <li>Select the details you wish to update.</li>
        <li>Upload valid supporting documents.</li>
        <li>Pay the applicable update fee if required.</li>
        <li>Submit the request.</li>
        <li>Save your Update Request Number (URN).</li>
        <li>Track the status of your update online.</li>
      </ol>

      <div style={{ marginTop: "40px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Cgmn9Bn8SMQ"
          title="Update Aadhaar Tutorial"
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
        <Link to="/course/aadhaar/lesson1">
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

        <Link to="/course/aadhaar/completed">
          <button
            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
            }}
          >
            Finish ✓
          </button>
        </Link>
      </div>
    </div>
  );
}