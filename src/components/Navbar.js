import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav aria-label="Main navigation">
    <Link className="brand" to="/" onClick={() => setOpen(false)}><span className="logo">SP<span>.</span></span><span>Satjal Pant</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <ul id="navigation-links" className={open ? "nav-links open" : "nav-links"}>
      {[["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/education", "Education"], ["/services", "Services"], ["/contact", "Contact"]].map(([path, label]) => <li key={path}><NavLink end={path === "/"} to={path} onClick={() => setOpen(false)}>{label}</NavLink></li>)}
    </ul>
  </nav></header>;
}
