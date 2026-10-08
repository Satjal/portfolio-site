import { Link } from "react-router-dom";
export default function Footer() {
  return <footer><div className="footer-inner"><div><Link className="footer-brand" to="/">Satjal Pant<span>.</span></Link><p>Thoughtful design. Purposeful code.</p></div><div className="footer-links"><a href="https://github.com/SatjalPant" target="_blank" rel="noreferrer">GitHub ↗</a><Link to="/contact">Let's connect ↗</Link></div><small>© {new Date().getFullYear()} Satjal Pant</small></div></footer>;
}
