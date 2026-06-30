import { useEffect, useState } from "react";
import { LANG_CONTENT } from "../siteConfig.js";

const LINKS = [
  { href: "#about", label: "Brief" },
  { href: "#prizes", label: "Prizes" },
  { href: "#categories", label: "Categories" },
  { href: "#tracks", label: "Tracks" },
  { href: "#rules", label: "Rules" },
  { href: "#reel", label: "How It Rolls" },
];

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="lang-bar">
        <div className="container lang-bar-inner">
          {Object.entries(LANG_CONTENT).map(([code, data]) => (
            <button
              key={code}
              className={`lbtn ${lang === code ? "is-on" : ""}`}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
            >
              {data.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          Danceverse
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#categories" className="nav-cta">
          Enter Now
        </a>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="#categories"
          className="mobile-menu-cta"
          onClick={() => setOpen(false)}
        >
          Enter Now ↗
        </a>
      </nav>
    </header>
  );
}
