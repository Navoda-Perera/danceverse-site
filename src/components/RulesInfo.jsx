import { useState } from "react";
import { RULES_SECTIONS } from "../siteConfig.js";

function Chevron({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease",
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function RulesInfo() {
  // Independent open/closed state per accordion item — several can be open at once.
  const [openSet, setOpenSet] = useState(() => new Set([0]));

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className="rules" id="rules">
      <div className="container">
        <span className="eyebrow">තොරතුරු · Information</span>
        <h2 className="section-heading">Rules &amp; Scoring</h2>
        <p className="section-lede">
          සිංහල හා ඉංග්‍රීසි යන දෙකෙන්ම — read before you submit. Tap a
          section to expand it.
        </p>

        <div className="accordion">
          {RULES_SECTIONS.map((section, i) => {
            const open = openSet.has(i);
            return (
              <div className={`acc-item ${open ? "is-open" : ""}`} key={section.title}>
                <button
                  className="acc-head"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                >
                  <span className="acc-head-text">
                    {section.title}
                    <span className="acc-head-si">{section.titleSi}</span>
                  </span>
                  <Chevron open={open} />
                </button>

                <div className="acc-body" hidden={!open}>
                  {/* --- Competition Rules list --- */}
                  {section.items && (
                    <ul className="rule-list">
                      {section.items.map((it) => (
                        <li key={it.en}>
                          <span className="rule-en">{it.en}</span>
                          <span className="rule-si">{it.si}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* --- Scoring System --- */}
                  {section.scoring && (
                    <>
                      <div className="score-row">
                        {section.scoring.map((s) => (
                          <div className="score-card" key={s.label}>
                            <span className="score-icon">{s.icon}</span>
                            <span className="score-label">
                              {s.label} <span className="rule-si">{s.labelSi}</span>
                            </span>
                            <span className="score-points">{s.points}</span>
                          </div>
                        ))}
                      </div>

                      <div className="score-example">
                        <span className="score-example-title">Example</span>
                        {section.example.map((row) => (
                          <div className="score-example-row" key={row.label}>
                            <span>{row.label}</span>
                            <span>{row.points}</span>
                          </div>
                        ))}
                        <div className="score-example-total">
                          <span>Total</span>
                          <span>{section.exampleTotal}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- Video Guidelines grid --- */}
                  {section.requirements && (
                    <div className="req-grid">
                      {section.requirements.map((r) => (
                        <div className="req-item" key={r.label}>
                          <span className="req-icon">{r.icon}</span>
                          <span>
                            {r.label}
                            {r.labelSi && <span className="rule-si"> · {r.labelSi}</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
