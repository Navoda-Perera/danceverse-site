# Danceverse Challenge 2026 — Website

A React + Vite single-page site for "HETHEN LIVE presents DANCEVERSE Challenge
2026." Built with a custom dark "tape culture" theme (camcorder/dance-video
vibe) — separate from the HETHEN LIVE main site's Orbyz theme.

---

## 1. What's in this folder

```
danceverse-site/
├── index.html              ← page shell + Google Fonts
├── package.json
├── vite.config.js
├── public/
│   └── videos/             ← PUT YOUR .mp4 HERE (see step 4)
└── src/
    ├── main.jsx             entry point
    ├── App.jsx               assembles all sections
    ├── index.css             ALL styling + color theme (edit colors here)
    ├── siteConfig.js         ← Google Form links, dates — edit here, no coding needed
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx          full-screen video hero
        ├── About.jsx
        ├── Categories.jsx    Solo / Duo / Group cards → your 3 Google Forms
        ├── Timeline.jsx      "The Reel" 4-step how-it-works
        └── Footer.jsx
```

## 2. Install VS Code + Node.js (one-time setup)

1. Install **VS Code**: https://code.visualstudio.com
2. Install **Node.js LTS**: https://nodejs.org (this also installs `npm`)
3. Confirm both installed — open a terminal and run:
   ```
   node -v
   npm -v
   ```
   You should see version numbers, not errors.

## 3. Open and run the project

1. Unzip this project anywhere on your computer.
2. Open VS Code → File → Open Folder → select `danceverse-site`.
3. Open the built-in terminal: `Terminal` menu → `New Terminal`.
4. Install dependencies (only needed once):
   ```
   npm install
   ```
5. Start the local dev server:
   ```
   npm run dev
   ```
6. VS Code will print a local link (usually `http://localhost:5173`). Ctrl+click
   it to open the site in your browser. The page auto-refreshes whenever you
   save a file.

## 4. Add your hero video (the .mp4 "vibe video")

1. Drop your video file into `public/videos/` and name it exactly:
   ```
   public/videos/hero.mp4
   ```
2. (Optional) Add a poster image — the frame shown before the video loads —
   named `public/videos/hero-poster.jpg`.
3. Keep the file reasonably small (under ~15–20MB) so the page loads fast.
   If your file is large, compress it first (e.g. with HandBrake, or
   `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 hero.mp4`).
4. Refresh the browser — the video now plays full-screen behind the hero
   text, muted and looping (this is required by all browsers for autoplay).

If no video is added, the hero still looks complete thanks to a dark
gradient fallback — so the site is never broken while you're sourcing the
clip.

## 5. Update your registration links / event details

Open `src/siteConfig.js`. Everything you need to change without touching
component code lives there:

```js
export const FORM_LINKS = {
  solo: "...",
  duo: "...",
  group: "...",
};
```

**Heads-up:** the SOLO and GROUP links you sent point to the exact same
Google Form ID. If that wasn't intentional, replace the `group` link with
the correct form URL — otherwise Group entrants will land on the Solo form.

Also in that file: `EVENT_INFO` (entries-close date, runtime limit, reach
label) and `SOCIAL_LINKS` (Instagram/TikTok/Facebook — currently `#`
placeholders).

## 6. Customize colors / fonts

All design tokens are at the top of `src/index.css`:

```css
:root {
  --bg: #0a0a0c;              /* background */
  --accent-magenta: #ff1f6d;  /* primary accent */
  --accent-lime: #c8ff3d;     /* secondary accent */
  --accent-cyan: #2de2e6;     /* tertiary accent */
  --font-display: "Unbounded", sans-serif;
  --font-body: "Hanken Grotesk", sans-serif;
  --font-mono: "Space Mono", monospace;
}
```

Change any hex value or font name and every section updates automatically
— no need to hunt through individual components.

## 7. Build the final site to upload to hosting

When you're happy with everything:

```
npm run build
```

This creates a `dist/` folder containing the finished, optimized website
(plain HTML/CSS/JS). Upload the **contents** of `dist/` to any static host:
Netlify, Vercel, GitHub Pages, or your own server / cPanel `public_html`.

To preview that production build locally before uploading:

```
npm run preview
```

---

## Notes on structure vs. the reference template

This was built as an original layout and color system (not copied from the
ThemeForest template you linked) — hero with a camcorder/viewfinder HUD,
"tape" category cards, and a 4-step "Reel" timeline — themed around the
dance-video / event vibe rather than a generic nightclub template look.

The Solo / Duo / Group cards link directly to your three Google Forms
(opening in a new tab) instead of a custom-built registration form, exactly
as requested.
