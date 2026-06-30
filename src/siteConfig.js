/* ============================================================
   SITE CONFIG — edit this file to update links, dates & copy
   without touching any component code.
   ============================================================ */

// Google Form links for each entry category.
// NOTE: the SOLO and GROUP links you supplied point to the exact
// same Google Form ID (1FAIpQLSe0xTvt5...WuWh5G5IQ). If that's a
// copy-paste mix-up, swap in the correct GROUP form URL below —
// otherwise Group entrants will land on the Solo form.
export const FORM_LINKS = {
  solo: "https://docs.google.com/forms/d/e/1FAIpQLSdNk2XlLdO6mgtOeo-aQ6BHOU-Id2fVScSs2dIeIQnDJeC2Ig/viewform?usp=header",
  duo: "https://docs.google.com/forms/d/e/1FAIpQLScdZzYJB8OF-954oNOYxY8oP5at6z6w-tFaa5XuF5E2ReFa8Q/viewform?usp=header",
  group: "https://docs.google.com/forms/d/e/1FAIpQLSe0xTvt5ZmS8zYGuU9Pk6UW37zISqK1cdwSP8fBWYuWh5G5IQ/viewform?usp=header",
};

// Shown in the hero metadata strip. Replace "TBA" once confirmed.
export const EVENT_INFO = {
  entriesClose: "TBA",
  runtime: "60s MAX / CLIP",
  reach: "ISLAND-WIDE",
};

export const SOCIAL_LINKS = {
  instagram: "#",
  tiktok: "#",
  facebook: "#",
};

// Official suggested tracks — swap in real track names/links once confirmed.
export const TRACKS = [
  { n: "Track 01", genre: "Trending Pop" },
  { n: "Track 02", genre: "Hip-Hop / Urban" },
  { n: "Track 03", genre: "Sinhala Pop" },
  { n: "Track 04", genre: "Tamil Dance" },
  { n: "Track 05", genre: "Electronic / EDM" },
  { n: "Track 06", genre: "Baila / Folk" },
  { n: "Track 07", genre: "R&B / Soul" },
  { n: "Track 08", genre: "Afrobeats" },
  { n: "Track 09", genre: "K-Pop Inspired" },
  { n: "Track 10", genre: "Bollywood" },
];

// EN / Sinhala / Tamil hero copy. Edit translations here.
export const LANG_CONTENT = {
  en: {
    label: "EN",
    tag: "Your Stage. Your Talent. Your Moment.",
    body: "Hit record, bring your style, and submit your tape. Sri Lanka's biggest dance video challenge is open island-wide — Solo, Duo, and Group. Best tapes get shortlisted for the live finale.",
  },
  si: {
    label: "සිං",
    tag: "ඔබේ වේදිකාව. ඔබේ දක්ෂතාව. ඔබේ මොහොත.",
    body: "රෙකෝඩ් කරන්න, ඔබේ විලාසය පෙන්වන්න, ඔබේ වීඩියෝව ඉදිරිපත් කරන්න. ශ්‍රී ලංකාවේ විශාලතම නර්තන වීඩියෝ තරඟය දිවයින පුරා විවෘතයි — Solo, Duo, සහ Group. හොඳම වීඩියෝ සජීවී අවසන් මහාසංගමයට තේරී පත්වේ.",
  },
  ta: {
    label: "தமி",
    tag: "உங்கள் மேடை. உங்கள் திறமை. உங்கள் தருணம்.",
    body: "பதிவு செய்யுங்கள், உங்கள் பாணியை காட்டுங்கள், உங்கள் வீடியோவை சமர்ப்பியுங்கள். இலங்கையின் மிகப்பெரிய நடன வீடியோ போட்டி தீவு முழுவதும் திறந்துள்ளது — Solo, Duo, மற்றும் Group. சிறந்த வீடியோக்கள் நேரடி இறுதிப் போட்டிக்கு தேர்ந்தெடுக்கப்படும்.",
  },
};

// --- Prizes / Rewards — shown in the Prizes section ---
export const PRIZES = [
  {
    icon: "🏆",
    color: "var(--accent-lime)",
    title: "Grand Prize — LKR 100,000",
    body: "Awarded to the top-scoring entry across all categories at the live finale.",
  },
  {
    icon: "🎁",
    color: "var(--accent-cyan)",
    title: "Weekly Winners & Special Rewards",
    body: "Throughout the competition — new winners and prizes announced every week.",
  },
  {
    icon: "🌍",
    color: "var(--accent-magenta)",
    title: "Island-Wide Recognition",
    body: "Get seen, get recognized, and take your talent to a bigger stage.",
  },
];

// --- Rules & Scoring — bilingual (English / Sinhala) accordion content ---
export const RULES_SECTIONS = [
  {
    title: "Competition Rules",
    titleSi: "තරඟකාරී නීති",
    items: [
      { en: "Open to all dance styles", si: "සියලු නර්තන ශෛලීන් සඳහා විවෘතයි" },
      { en: "Must use one of the 10 official songs", si: "10 ගීත වලින් එකක් භාවිත කළ යුතුයි" },
      { en: "Video duration: 30–60 seconds", si: "වීඩියෝ කාලය: තත්පර 30–60" },
      { en: "Original performances only", si: "මුල් රංගනය පමණයි" },
      { en: "Maximum group size: 5", si: "උපරිම සාමාජිකයන් 5" },
      { en: "Fake engagement results in disqualification", si: "ව්‍යාජ engagement එකෙන් ඉවත් කරනු ලැබේ" },
      { en: "Organizers' decision is final", si: "සංවිධායකයන්ගේ තීරණය අවසාන" },
    ],
  },
  {
    title: "Scoring System",
    titleSi: "ලකුණු ක්‍රමය",
    scoring: [
      { icon: "❤️", label: "Like", labelSi: "ලයික්", points: "1 pt" },
      { icon: "💬", label: "Comment", labelSi: "කමෙන්ට්", points: "3 pts" },
      { icon: "🔄", label: "Share", labelSi: "ෂෙයාර්", points: "5 pts" },
    ],
    example: [
      { label: "100 Likes", points: "100 pts" },
      { label: "50 Comments", points: "150 pts" },
      { label: "20 Shares", points: "100 pts" },
    ],
    exampleTotal: "350 Points",
  },
  {
    title: "Video Guidelines",
    titleSi: "වීඩියෝ අවශ්‍යතා",
    requirements: [
      { icon: "📱", label: "Vertical 9:16", labelSi: "සිරස් 9:16" },
      { icon: "🎬", label: "Full HD 1080×1920", labelSi: "" },
      { icon: "🕒", label: "30–60 Seconds", labelSi: "තත්පර 30–60" },
      { icon: "💡", label: "Good Lighting", labelSi: "හොඳ ආලෝකය" },
      { icon: "🧍", label: "Full Body Visible", labelSi: "සම්පූර්ණ සිරුර" },
      { icon: "☁️", label: "Google Drive Upload", labelSi: "" },
    ],
  },
];
