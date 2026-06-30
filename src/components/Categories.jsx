import { FORM_LINKS } from "../siteConfig.js";

const CATEGORIES = [
  {
    id: "TAPE_01",
    color: "var(--accent-magenta)",
    name: "Solo",
    desc: "Just you and the beat. Show off your individual style, control, and stage presence in one uninterrupted take.",
    frames: "1 dancer",
    href: FORM_LINKS.solo,
  },
  {
    id: "TAPE_02",
    color: "var(--accent-cyan)",
    name: "Duo",
    desc: "Chemistry on camera. Sync, contrast, and storytelling between two performers moving as one.",
    frames: "2 dancers",
    href: FORM_LINKS.duo,
  },
  {
    id: "TAPE_03",
    color: "var(--accent-lime)",
    name: "Group",
    desc: "Bring the whole crew. Formations, transitions, and energy that fills the frame from corner to corner.",
    frames: "3+ dancers",
    href: FORM_LINKS.group,
  },
];

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="categories-head">
          <div>
            <span className="eyebrow">Pick Your Tape</span>
            <h2 className="section-heading">Three Categories</h2>
            <p className="section-lede">
              Each category opens its own entry form. Fill it in, attach your
              video link, and you're officially in the running.
            </p>
          </div>
        </div>

        <div className="tape-grid">
          {CATEGORIES.map((cat) => (
            <article
              className="tape-card"
              key={cat.id}
              style={{ "--tape-color": cat.color }}
            >
              <span className="frame-count">{cat.frames}</span>
              <span className="tape-id">{cat.id}</span>
              <span className="tape-play">
                <PlayIcon />
              </span>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <a
                className="btn"
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register — {cat.name} ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
