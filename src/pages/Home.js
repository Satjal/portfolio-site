import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import portfolio from "../assets/portfolio.jpg";
import restaurant from "../assets/restaurant.jpg";

export default function Home() {
  return <>
    <section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING STUDENT · TORONTO</p><h1>Turning ideas into<br /><span>digital experiences.</span></h1><p className="hero-description">Hi, I'm Satjal. I build thoughtful, responsive websites with a focus on clean design and the people who use them.</p><div className="actions"><Link className="button" to="/projects">Explore my work <span>↗</span></Link><Link className="text-link" to="/contact">Let's talk <span>→</span></Link></div><div className="hero-note"><span>Currently learning & creating</span><span>Centennial College, Canada</span></div></div><div className="portrait-wrap"><span className="portrait-label">THE PERSON BEHIND THE CODE</span><img className="hero-portrait" src={profile} alt="Satjal Pant" /><div className="portrait-caption"><span>Curiosity drives me.<br />Code brings it to life.</span><span className="asterisk" aria-hidden="true">✳</span></div></div></section>
    <section className="skills-strip" aria-label="Technologies"><span>MY TOOLKIT</span><p>React</p><p>JavaScript</p><p>HTML & CSS</p><p>SQL</p><p>Git</p></section>
    <section className="home-work"><div className="section-heading"><div><p className="eyebrow">A LITTLE OF WHAT I DO</p><h2>Selected work<span>.</span></h2></div><Link className="text-link" to="/projects">All projects ↗</Link></div><div className="featured-grid">{[{image:portfolio,title:"Personal portfolio",type:"REACT · FRONTEND DEVELOPMENT"},{image:restaurant,title:"Restaurant website",type:"WEB DESIGN · DEVELOPMENT"}].map(project => <Link className="featured-card" to="/projects" key={project.title}><div className="featured-image"><img src={project.image} alt={project.title} loading="lazy" /><span aria-hidden="true">↗</span></div><p className="eyebrow">{project.type}</p><h3>{project.title}</h3></Link>)}</div></section>
    <section className="home-cta"><p className="eyebrow">HAVE AN IDEA IN MIND?</p><h2>Let's build something<br />worth sharing.</h2><Link className="button" to="/contact">Get in touch ↗</Link></section>
  </>;
}
