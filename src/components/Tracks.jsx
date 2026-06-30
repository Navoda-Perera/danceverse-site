import { TRACKS } from "../siteConfig.js";

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function Tracks() {
  return (
    <section className="tracks" id="tracks">
      <div className="container">
        <span className="eyebrow">Pick The Beat</span>
        <h2 className="section-heading">Suggested Tracks</h2>
        <p className="section-lede">
          Ten trending tracks across languages and genres — use one as the
          soundtrack for your entry, or bring your own as long as it fits the
          runtime.
        </p>

        <div className="track-list">
          {TRACKS.map((t, i) => (
            <div className="track-row" key={t.n}>
              <span className="track-no">{String(i + 1).padStart(2, "0")}</span>
              <div className="track-info">
                <span className="track-name">{t.n}</span>
                <span className="track-genre">{t.genre} · Official track TBA</span>
              </div>
              <div className="track-langs">
                <span className="lc lc-en">EN</span>
                <span className="lc lc-si">සිං</span>
                <span className="lc lc-ta">தமி</span>
              </div>
              <span className="track-play" aria-hidden="true">
                <PlayIcon />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
