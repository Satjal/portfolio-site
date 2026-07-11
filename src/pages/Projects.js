import portfolioImage from "../assets/portfolio.jpg";
import restaurantImage from "../assets/restaurant.jpg";
import studentwebImage from "../assets/studentweb.png";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      <div className="projects-container">

        <div className="project-card">

          <img
            src={portfolioImage}
            alt="Portfolio Website"
            className="service-image"
          />

          <h2>React Portfolio Website</h2>

          <p>
            Developed a responsive portfolio website using React and React Router.
          </p>

          <p>
            Role: Frontend Developer
          </p>

          <p>
            Outcome: Created a professional personal portfolio with multiple pages,
            navigation, and responsive design.
          </p>

        </div>

        <div className="project-card">

          <img
            src={restaurantImage}
            alt="Restaurant Website"
            className="service-image"
          />

          <h2>Restaurant Website</h2>

          <p>
            Designed and developed a restaurant website with menu and contact sections.
          </p>

          <p>
            Role: Web Developer
          </p>

          <p>
            Outcome: Built a modern and visually appealing website for restaurant services.
          </p>

        </div>

        <div className="project-card">

          <img
            src={studentwebImage}
            alt="Student Website"
            className="service-image"
          />

          <h2>Centennial Student Website</h2>

          <p>
            Developed and hosted a website on Centennial College student web hosting.
          </p>

          <p>
            Role: Frontend Developer
          </p>

          <p>
            Outcome: Successfully deployed a live website accessible online.
          </p>

          <a
            href="http://studentweb.cencol.ca/spant6"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>

        </div>

      </div>
    </div>
  );
}

export default Projects;