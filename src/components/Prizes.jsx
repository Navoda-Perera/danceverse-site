import { PRIZES } from "../siteConfig.js";

export default function Prizes() {
  return (
    <section className="prizes" id="prizes">
      <div className="container">
        <span className="eyebrow">What's At Stake</span>
        <h2 className="section-heading">Prizes &amp; Recognition</h2>
        <p className="section-lede">
          Every category feeds into the same finale. Here's what's on the
          table for the dancers who stand out.
        </p>

        <div className="prize-grid">
          {PRIZES.map((p) => (
            <div className="prize-card" key={p.title} style={{ "--prize-color": p.color }}>
              <span className="prize-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="prizes-cta">
          <a href="#categories" className="btn btn-primary">
            Choose Your Category
          </a>
        </div>
      </div>
    </section>
  );
}
