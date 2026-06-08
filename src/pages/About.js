import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <div className="about-container">

      <img
        src={profileImage}
        alt="Satjal Pant"
        className="profile-image"
      />

      <div>

        <h1>About Me</h1>

        <p>
          My name is Satjal Pant. I am a Software Engineering
          student at Centennial College in Scarborough, Canada.
        </p>

        <p>
          I am passionate about web development, programming,
          and creating modern responsive applications.
        </p>

        <a href="/resume.docx" download>
          <button>
            Download Resume
          </button>
        </a>

      </div>

    </div>
  );
}

export default About;