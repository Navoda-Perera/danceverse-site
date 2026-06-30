import { SOCIAL_LINKS } from "../siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            Danceverse
            <small>A HETHEN LIVE production · Sri Lanka</small>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <a href={SOCIAL_LINKS.instagram}>Instagram</a>
            <a href={SOCIAL_LINKS.tiktok}>TikTok</a>
            <a href={SOCIAL_LINKS.facebook}>Facebook</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {year} Hethen Live. All rights reserved.</span>
          <span>Danceverse Challenge 2026</span>
        </div>
      </div>
    </footer>
  );
}
