import webImage from "../assets/web.jpg";
import designImage from "../assets/frontend.png";
import databaseImage from "../assets/database.png";

function Services() {
  return (
    <div>
      <h1>Services</h1>

      <div className="projects-container">

        <div className="project-card">
          <img src={webImage} alt="Web Development" className="service-image" />

          <h2>Web Development</h2>

          <p>
            Responsive websites using React, HTML, CSS, and JavaScript.
          </p>
        </div>

        <div className="project-card">
          <img src={designImage} alt="Frontend Design" className="service-image" />

          <h2>Frontend Design</h2>

          <p>
            Modern and user-friendly frontend interface design.
          </p>
        </div>

        <div className="project-card">
          <img src={databaseImage} alt="Database Design" className="service-image" />

          <h2>Database Design</h2>

          <p>
            SQL database creation, queries, and management systems.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;