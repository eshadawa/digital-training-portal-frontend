import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: "#30436eff",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Digital Training Portal</h2>

        <div>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>
            Home
          </span>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>
            Courses
          </span>
          <span style={{ marginRight: "20px", cursor: "pointer" }}>
            Certificates
          </span>
          <span style={{ cursor: "pointer" }}>Login</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background: "#e0f2fe",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "#000",
            marginBottom: "25px",
          }}
        >
          DigiLocker, Aadhaar & PAN Services Training
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#242121ff",
            marginBottom: "35px",
          }}
        >
          Learn Government Digital Services Professionally
        </p>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Start Learning
        </button>
      </section>

      {/* Courses Section */}
      <section
        style={{
          display: "flex",
          gap: "25px",
          padding: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "#f8fafc",
          color: "#242121ff",
        }}
      >
        <div
          style={{
            width: "320px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          
          }}
        >
          <h2 style={{ color: "#000" }}>DigiLocker Training</h2>

          <p>
            Learn document upload, verification, sharing, digital certificates,
            and DigiLocker account management.
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            View Course
          </button>
        </div>

        <div
          style={{
            width: "320px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          
          }}
        >
          <h2 style={{ color: "#000" }}>Aadhaar Services</h2>

          <p>
            Learn Aadhaar download, update, biometric authentication, e-KYC,
            PVC card ordering and verification.
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            View Course
          </button>
        </div>

        <div
          style={{
            width: "320px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          
          }}
        >
          <h2 style={{ color: "#000" }}>PAN Services</h2>

          <p>
            Learn PAN application, PAN correction, PAN-Aadhaar linking,
            verification and e-PAN download.
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            View Course
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 Digital Training Portal
      </footer>
    </div>
  );
}

export default App;