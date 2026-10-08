import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://portfolio-site-ten-sandy-19.vercel.app";
const pages = {
  "/": ["Satjal Pant | Software Engineering Portfolio", "Meet Satjal Pant, a Software Engineering student in Toronto. Explore web development projects, skills, and education."],
  "/about": ["About Satjal Pant | Software Engineering Student", "Meet Satjal Pant, a Software Engineering student at Centennial College in Canada with an interest in web development and frontend design."],
  "/projects": ["Web Development Projects | Satjal Pant", "Explore Satjal Pant's React portfolio, restaurant website, and Centennial student website projects."],
  "/education": ["Education | Satjal Pant", "Learn about Satjal Pant's Software Engineering studies at Centennial College and science education in Nepal."],
  "/services": ["Web Development & Frontend Design | Satjal Pant", "Explore Satjal Pant's interests and skills in responsive web development, frontend interface design, and SQL databases."],
  "/contact": ["Contact Satjal Pant | Toronto, Canada", "Get in touch with Satjal Pant in Toronto to discuss web development ideas, projects, and opportunities."],
};

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const page = pages[path];
    if (!page) return;
    const [title, description] = page;
    document.title = title;
    const setMeta = (selector, content) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', siteUrl + path);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", siteUrl + path);
  }, [pathname]);
  return null;
}
