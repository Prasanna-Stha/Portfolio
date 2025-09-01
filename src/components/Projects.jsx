import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList, faTh } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectsData = [
    {
      title: "LinkedIn Clone",
      description:
        "A responsive LinkedIn clone built with React, designed to mimic the features of LinkedIn with custom functionalities.",
      link: "https://github.com/Prasanna-Stha/LinkedIn",
      tags: ["React", "Frontend", "Clone"],
    },
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce website with a user-friendly interface, built with React.",
      link: "https://github.com/Prasanna-Stha/E-Commerce---Kwaan",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "User Panel",
      description:
        "A simple system for managing users, based on their roles. ",
      link: "https://github.com/Prasanna-Stha/UserPanel",
      tags: ["React", "Chakra UI", "Productivity"],
    },
    {
      title: "educateNepal",
      description:
        "An online learning platform built with pure HTML, CSS, and JavaScript, focused on providing educational resources to Nepali students.",
      link: "https://github.com/Prasanna-Stha/educateNepal",
      tags: ["HTML", "CSS", "JavaScript", "Education"],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProjects = projectsData.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <section className="bg-gray-900 text-white py-12 md:py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 w-fit mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
          {/* Search Bar - Full width on mobile, auto on larger */}
          <div className="w-full sm:w-auto">
            <div className="relative max-w-md mx-auto sm:mx-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* View Toggle - Right-aligned on larger screens */}
          <button
            onClick={toggleViewMode}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center sm:justify-start"
            aria-label={`Switch to ${
              viewMode === "grid" ? "list" : "grid"
            } view`}
          >
            <FontAwesomeIcon
              icon={viewMode === "grid" ? faList : faTh}
              className="text-blue-500"
            />
            <span className="text-white">
              {viewMode === "grid" ? "List View" : "Grid View"}
            </span>
          </button>
        </div>

        {/* Projects Display */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg md:text-xl">
              No projects found matching your search.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View - Responsive columns */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-5 sm:p-6 shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out h-full flex flex-col"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base flex-grow">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 text-white px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-300 hover:text-white font-medium text-sm sm:text-base inline-block mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        ) : (
          /* List View - Responsive layout */
          <div className="space-y-4 sm:space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-5 sm:p-6 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-700 text-white px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-300 hover:text-white font-medium text-sm sm:text-base whitespace-nowrap md:ml-4 mt-3 md:mt-0 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
