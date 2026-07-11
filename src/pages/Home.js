import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">

      <h1>Hello, I'm Satjal Pant</h1>

      <p>
        A passionate software engineering student focused on building
        modern, responsive, and user-friendly web applications.
      </p>

      <p>
        My mission is to continuously improve my programming skills and
        create impactful digital experiences through technology and design.
      </p>

      <Link to="/about">
        <button>
          Learn More About Me
        </button>
      </Link>

    </div>
  );
}

export default Home;