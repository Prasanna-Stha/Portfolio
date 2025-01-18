import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faGitAlt,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  // Array of skills with properties
  const skills = [
    {
      name: "React",
      icon: faReact,
      description: "A JavaScript library for building user interfaces.",
      level: "Proficient",
      bgHover: "bg-blue-500",
      iconColor: "#61dafb", // React logo color
    },
    {
      name: "JavaScript",
      icon: faJsSquare,
      description: "The programming language of the web.",
      level: "Expert",
      bgHover: "bg-yellow-400",
      iconColor: "#f7df1e", // JavaScript logo color
    },
    {
      name: "CSS3",
      icon: faCss3Alt,
      description: "Styling language for creating beautiful websites.",
      level: "Advanced",
      bgHover: "bg-blue-400",
      iconColor: "#1572b6", // CSS3 logo color
    },
    {
      name: "TailwindCSS",
      icon: null,
      description: "A utility-first CSS framework for rapid UI development.",
      level: "Proficient",
      bgHover: "bg-teal-400",
      iconColor: "#38b2ac", // TailwindCSS color
    },
    {
      name: "Git",
      icon: faGitAlt,
      description: "Version control system for tracking code changes.",
      level: "Advanced",
      bgHover: "bg-orange-600",
      iconColor: "#f1502f", // Git logo color
    },
    {
      name: "Linux",
      icon: faLinux,
      description: "Operating system for developers and servers.",
      level: "Intermediate",
      bgHover: "bg-green-500",
      iconColor: "#00cc7a", // Linux logo color
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">
          My Skills
        </h2>

        {/* Skills Container with Centered Skills Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => {
            const [iconColor, setIconColor] = useState("white");

            return (
              <div
                key={index}
                className="cursor-pointer group flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setIconColor(skill.iconColor)}
                onMouseLeave={() => setIconColor("white")}
              >
                <div
                  className={`w-20 h-20 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-4xl text-white group-hover:${skill.bgHover}`}
                >
                  {skill.icon ? (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      style={{ color: iconColor }}
                      className="transition-colors duration-300"
                    />
                  ) : (
                    <span className="text-2xl font-bold">?</span>
                  )}
                </div>
                <span className="text-xl font-semibold text-gray-100">{skill.name}</span>
                <p className="text-gray-400 mt-2 text-center text-sm">
                  {skill.description}
                </p>
                <span className="mt-4 text-xs bg-gray-700 text-white px-3 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
