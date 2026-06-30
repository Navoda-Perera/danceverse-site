import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Prizes from "./components/Prizes.jsx";
import Categories from "./components/Categories.jsx";
import Tracks from "./components/Tracks.jsx";
import RulesInfo from "./components/RulesInfo.jsx";
import Timeline from "./components/Timeline.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About />
        <Prizes />
        <Categories />
        <Tracks />
        <RulesInfo />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
