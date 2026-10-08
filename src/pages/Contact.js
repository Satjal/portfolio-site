import { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:spant6@my.centennialcollege.ca?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
    setStatus("Your email draft is ready to open in your email app. Review it and press Send there. If it doesn't open, use the email link on this page.");
  }
  return <section><p className="eyebrow">LET'S CONNECT</p><h1>Good things start<br />with a conversation<span>.</span></h1><div className="contact-layout"><div className="contact-info"><h2>Have a project or a question?</h2><p>I'd love to hear about it. Get in touch to discuss an idea, an opportunity, or simply say hello.</p><a className="contact-email" href="mailto:spant6@my.centennialcollege.ca">spant6@my.centennialcollege.ca ↗</a><p className="location">Toronto, Ontario · Canada</p><a className="text-link" href="https://github.com/Satjal" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div><form onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Smith" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={200} /></label></div><label>Subject<input name="subject" placeholder="What would you like to talk about?" required maxLength={200} /></label><label>Your message<textarea name="message" placeholder="Tell me a little about your idea…" rows={5} required maxLength={3000} /></label><p className="form-note">This opens a draft in your email app so you can review and send it.</p><button className="button" type="submit">Create email draft ↗</button><p role="status" className="form-status">{status}</p></form></div></section>;
}
