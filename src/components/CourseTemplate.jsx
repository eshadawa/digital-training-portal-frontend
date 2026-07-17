import "./CourseTemplate.css";
import { Link } from "react-router-dom";

export default function CourseTemplate({
  title,
  description,
  image,
  rating,
  learners,
  duration,
  level,
  startLink,
  notes,
  modules = [],
}) {
  return (
    <div className="course-page">

      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <h1>{title}</h1>

          <p>{description}</p>

          <div className="course-info">

            <span>⭐ {rating} Rating</span>

            <span>👨‍🎓 {learners} Learners</span>

            <span>⏱ {duration}</span>

            <span>🟢 {level}</span>

          </div>

          <div className="hero-buttons">

            <Link to={startLink}>
              <button className="primary-btn">
                Start Learning
              </button>
            </Link>

            <a
              href={notes}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary-btn">
                Download Notes
              </button>
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={image}
            alt={title}
          />

        </div>

      </section>

      {/* MODULES */}

      {modules.length > 0 && (

        <section className="modules">

          <h2>Course Modules</h2>

          {modules.map((module, index) => (

            <div
              className="module-card"
              key={index}
            >

              <div className="module-number">
                {index + 1}
              </div>

              <div className="module-content">

                <h3>{module.title}</h3>

                <p>{module.description}</p>

                {module.link && (

                  <Link to={module.link}>

                    <button className="watch-btn">

                      Watch Module

                    </button>

                  </Link>

                )}

              </div>

            </div>

          ))}

        </section>

      )}

    </div>
  );
}
