import { EVENT_INFO, LANG_CONTENT } from "../siteConfig.js";

export default function Hero({ lang }) {
  const copy = LANG_CONTENT[lang] || LANG_CONTENT.en;

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        {/* Drop your own clip in /public/videos/hero.mp4 — see README.
            Until then this gracefully falls back to a dark gradient. */}
        <video autoPlay muted loop playsInline poster="/videos/hero-poster.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-fallback" aria-hidden="true" />
        <div className="hero-scrim" />
        <div className="hero-scanlines" />
      </div>

      <div className="container hero-content">
        <p className="presenter-tag">Hethen Live Presents</p>

        <span className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Nationwide Dance Video Challenge
        </span>

        <h1 className="hero-title">
          <span>Danceverse</span>
          <span className="line-2">Challenge 2026</span>
        </h1>

        <p className="hero-tagline">{copy.tag}</p>
        <p className="hero-sub">{copy.body}</p>

        <div className="hero-actions">
          <a href="#categories" className="btn btn-primary">
            Choose Your Category
          </a>
          <a href="#reel" className="btn btn-ghost">
            How It Rolls
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            Format
            <b>Solo · Duo · Group</b>
          </div>
          <div className="hero-meta-item">
            Runtime
            <b>{EVENT_INFO.runtime}</b>
          </div>
          <div className="hero-meta-item">
            Entries Close
            <b>{EVENT_INFO.entriesClose}</b>
          </div>
          <div className="hero-meta-item">
            Reach
            <b>{EVENT_INFO.reach}</b>
          </div>
        </div>
      </div>
    </section>
  );
}
