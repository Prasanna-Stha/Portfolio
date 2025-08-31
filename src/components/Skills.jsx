import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faGitAlt,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "React",
      icon: faReact,
      description: "Building interactive UIs with reusable components",
      level: "Advanced",
      bgHover: "bg-blue-500/10",
      iconColor: "#61dafb",
      borderColor: "border-blue-500/30"
    },
    {
      name: "JavaScript",
      icon: faJsSquare,
      description: "Modern ES6+ syntax and functional programming",
      level: "Advanced",
      bgHover: "bg-yellow-400/10",
      iconColor: "#f7df1e",
      borderColor: "border-yellow-400/30"
    },
    {
      name: "TypeScript",
      icon: null,
      description: "Strongly typed JavaScript for scalable applications",
      level: "Intermediate",
      bgHover: "bg-blue-600/10",
      iconColor: "#3178c6",
      borderColor: "border-blue-600/30"
    },
    {
      name: "CSS3",
      icon: faCss3Alt,
      description: "Responsive layouts and animations",
      level: "Advanced",
      bgHover: "bg-blue-400/10",
      iconColor: "#1572b6",
      borderColor: "border-blue-400/30"
    },
    {
      name: "TailwindCSS",
      icon: null,
      description: "Utility-first CSS framework for rapid development",
      level: "Advanced",
      bgHover: "bg-teal-400/10",
      iconColor: "#38b2ac",
      borderColor: "border-teal-400/30"
    },
    {
      name: "Git",
      icon: faGitAlt,
      description: "Version control and collaborative workflows",
      level: "Intermediate",
      bgHover: "bg-orange-600/10",
      iconColor: "#f1502f",
      borderColor: "border-orange-600/30"
    },
    {
      name: "Linux",
      icon: faLinux,
      description: "Command line and server administration",
      level: "Intermediate",
      bgHover: "bg-green-500/10",
      iconColor: "#00cc7a",
      borderColor: "border-green-500/30"
    },
    {
      name: "Chakra UI",
      icon: null,
      description: "Accessible React component library",
      level: "Intermediate",
      bgHover: "bg-teal-500/10",
      iconColor: "#319795",
      borderColor: "border-teal-500/30"
    },
  ];

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <section className="bg-gray-900 text-white py-12 md:py-20 lg:py-24" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and View Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 md:mb-16 gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              My Skills
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto sm:mx-0 rounded-full"></div>
          </div>

          <button
            onClick={toggleViewMode}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700"
            aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
          >
            <FontAwesomeIcon
              icon={viewMode === "grid" ? faList : faTh}
              className="text-blue-400"
            />
            <span className="text-white text-sm sm:text-base">
              {viewMode === "grid" ? "List View" : "Grid View"}
            </span>
          </button>
        </div>

        {/* Skills Display */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative p-5 sm:p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-lg ${skill.bgHover} ${skill.borderColor}`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-gray-700/50 flex items-center justify-center text-3xl sm:text-4xl transition-all duration-300 ${hoveredSkill === index ? 'scale-110' : ''}`}>
                    {skill.icon ? (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        style={{ color: hoveredSkill === index ? skill.iconColor : "white" }}
                        className="transition-colors duration-300"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-gray-300">{skill.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-3 flex-grow">
                    {skill.description}
                  </p>
                  <span className={`text-xs px-3 py-1 rounded-full ${hoveredSkill === index ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-700 text-gray-300'}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex items-start sm:items-center p-4 sm:p-5 bg-gray-800 rounded-lg border border-gray-700 transition-all duration-300 ${skill.bgHover} ${skill.borderColor} ${hoveredSkill === index ? 'border-transparent shadow-md' : ''}`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`mr-4 sm:mr-6 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-700/50 flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${hoveredSkill === index ? 'scale-105' : ''}`}>
                  {skill.icon ? (
                    <FontAwesomeIcon
                      icon={skill.icon}
                      style={{ color: hoveredSkill === index ? skill.iconColor : "white" }}
                      className="transition-colors duration-300"
                    />
                  ) : (
                    <span className="text-lg font-bold text-gray-300">{skill.name.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                      {skill.name}
                    </h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full ${hoveredSkill === index ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-700 text-gray-300'}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 sm:mt-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;