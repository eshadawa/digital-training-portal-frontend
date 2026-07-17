import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import "./AadhaarCourse.css";

export default function AadhaarCourse() {
  return (
    <div className="aadhaar-page">

      <section className="aadhaar-hero">

        <div className="hero-left">

          <h1>Aadhaar Card Training</h1>

          <p>
            Learn Aadhaar Registration, Updates,
            eKYC, PVC Card, Biometric Authentication
            and Government Workflows.
          </p>

          <div className="hero-badges">

            <div className="badge">⭐ 4.9 Rating</div>

            <div className="badge">👨‍🎓 15,000 Learners</div>

            <div className="badge">⏱ 40 Minutes</div>

            <div className="badge">🟢 Beginner</div>

          </div>

          <div className="hero-buttons">

            <Link to="/course/aadhaar/learn">
              <button className="start-btn">
                Start Learning
              </button>
            </Link>

            <button className="notes-btn">
              Download Notes
            </button>

          </div>

        </div>

        <div className="hero-right">
          <img
            src={hero}
            alt="Aadhaar Training"
          />
        </div>

      </section>

    </div>
  );
}