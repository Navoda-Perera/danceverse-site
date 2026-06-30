const FRAMES = [
  {
    no: "01",
    title: "Pick a Category",
    body: "Decide between Solo, Duo, or Group based on your crew size.",
  },
  {
    no: "02",
    title: "Film Your Routine",
    body: "Record a single take, max 60 seconds, good lighting, clear frame.",
  },
  {
    no: "03",
    title: "Submit the Form",
    body: "Open your category's Google Form and drop in your details + video link.",
  },
  {
    no: "04",
    title: "Get Shortlisted",
    body: "Standout tapes are pulled forward to perform live at the finale.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline" id="reel">
      <div className="container">
        <span className="eyebrow">How It Rolls</span>
        <h2 className="section-heading">The Reel</h2>
        <p className="section-lede">
          Four steps between you and the Danceverse stage. In order, no
          skipping.
        </p>

        <div className="reel">
          {FRAMES.map((f) => (
            <div className="frame" key={f.no}>
              <span className="frame-no">{f.no}</span>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
