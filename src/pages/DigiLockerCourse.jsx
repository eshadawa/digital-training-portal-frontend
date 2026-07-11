import "./DigiLockerCourse.css";
import { Link } from "react-router-dom";

export default function DigiLockerCourse() {
  return (
    <div className="course-page">

      <section className="hero">

        <div className="hero-left">

          <h1>DigiLocker Training</h1>

          <p>
            Learn DigiLocker from scratch with practical demonstrations,
            official government workflows and quizzes.
          </p>

          <div className="course-info">

            <span>⭐ 4.9 Rating</span>

            <span>👨‍🎓 12,000 Learners</span>

            <span>⏱ 35 Minutes</span>

            <span>🟢 Beginner</span>

          </div>

          <div className="hero-buttons">
            <div className="hero-buttons">

  <Link to="/course/digilocker/learn">
    <button className="primary-btn">
      Start Learning
    </button>
  </Link>

  <button className="secondary-btn">
    Download Notes
  </button>

</div>
          </div>

        </div>

        <div className="hero-right">

          <img
            src="https://img.youtube.com/vi/roQ-fHoCw_c/maxresdefault.jpg"
            alt="Digilocker"
          />

        </div>

      </section>
      <section className="modules">

    <div className="module-card">
    


        </div>

    </section>

</div>

  );
}