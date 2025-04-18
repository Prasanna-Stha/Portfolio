import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
