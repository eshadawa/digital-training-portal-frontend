import { Link } from "react-router-dom";

export default function PanLesson2() {
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

      <h2>Lesson 2 : Uses of PAN Card</h2>

      <p
        style={{
          lineHeight: "32px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        A Permanent Account Number (PAN) is an important financial identity
        issued by the Income Tax Department of India. It is required for
        various financial, banking and taxation-related activities.

        <br /><br />

        PAN helps the government track financial transactions and prevents tax
        evasion. It is mandatory for filing Income Tax Returns (ITR), opening
        bank accounts, investing in securities, purchasing high-value assets,
        and applying for loans.

        <br /><br />

        Individuals should always keep their PAN details updated and ensure
        that the name and date of birth match their Aadhaar to avoid issues
        while linking both documents.
      </p>

      <h2 style={{ marginTop: "35px" }}>Common Uses of PAN Card</h2>

      <ul
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Filing Income Tax Returns (ITR)</li>
        <li>Opening Bank Accounts</li>
        <li>Applying for Credit or Debit Cards</li>
        <li>Buying or Selling Property</li>
        <li>Applying for Loans</li>
        <li>Investing in Mutual Funds and Shares</li>
        <li>Opening a Demat Account</li>
        <li>High-Value Financial Transactions</li>
      </ul>

      <h2 style={{ marginTop: "35px" }}>Important Points</h2>

      <ol
        style={{
          lineHeight: "32px",
          fontSize: "18px",
        }}
      >
        <li>Every individual should have only one PAN Card.</li>
        <li>Link your PAN with Aadhaar before the prescribed deadline.</li>
        <li>Never share your PAN unnecessarily.</li>
        <li>Update incorrect PAN details immediately.</li>
        <li>Keep a digital copy safely stored in DigiLocker.</li>
      </ol>

      <div style={{ marginTop: "40px" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/aaqqxUs8nt8"
          title="Uses of PAN Card"
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
        <Link to="/course/pan/learn">
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

        <Link to="/course/pan/completed">
          <button
            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            Finish ✓
          </button>
        </Link>
      </div>
    </div>
  );
}