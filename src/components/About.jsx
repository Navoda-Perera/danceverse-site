const STATS = [
  { tag: "Presented By", val: "Hethen Live" },
  { tag: "Categories", val: "03 Formats" },
  { tag: "Judged On", val: "Style · Sync · Sass" },
  { tag: "Finale", val: "Live Showcase" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">The Brief</span>
          <h2 className="section-heading">
            One Camera.
            <br />
            Your Crew.
            <br />
            No Limits.
          </h2>
          <p>
            Danceverse Challenge 2026 is HETHEN LIVE's open call to every
            dancer in Sri Lanka — from bedroom choreographers to trained
            crews. Film your routine, submit the clip, and get seen by a
            nationwide audience and a panel that's watching for originality,
            not just technique.
          </p>
          <p>
            No stage fright, no travel, no excuses. Just you, your space, and
            a camera. The standout tapes from each category get pulled
            forward to perform live at the Danceverse finale.
          </p>
        </div>

        <div className="stat-stack">
          {STATS.map((s) => (
            <div className="stat-card" key={s.tag}>
              <span className="tag">{s.tag}</span>
              <span className="val">{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
