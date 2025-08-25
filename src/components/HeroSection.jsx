import { useState, useEffect } from "react";

const sentences = [
  "A Front-End Developer passionate about crafting modern, responsive designs.",
  "Turning ideas into functional and user-friendly interfaces.",
  "Exploring the intersection of design and technology.",
  "Dedicated to continuous learning and growth in the IT field.",
  "Committed to delivering high-quality, efficient solutions.",
];

const Hero = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];

    // Typing effect logic
    if (charIndex < currentSentence.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentSentence[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 3000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, currentSentenceIndex]);

  return (
    <header
      id="home"
      className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 sm:px-12"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Paru
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
          <span className="pop-in-text">{displayText}</span>
          <span className="blinking-cursor">|</span>
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8 gap-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-md transition duration-300 text-center sm:text-lg text-base"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition duration-300 text-center sm:text-lg text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
