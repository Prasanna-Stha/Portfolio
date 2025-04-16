import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faList, faTh } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  // Sample project data
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
        "A modern e-commerce website with a user-friendly interface, built with React and Node.js.",
      link: "https://github.com/Prasanna-Stha/E-Commerce---Kwaan",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "To-Do List",
      description:
        "A simple to-do list web app built with React and Tailwind for task management.",
      link: "https://github.com/Prasanna-Stha/to-Do-List",
      tags: ["React", "TailwindCSS", "Productivity"],
    },
    {
      title: "educateNepal",
      description:
        "An online learning platform built with pure HTML, CSS, and JavaScript, focused on providing educational resources to Nepali students.",
      link: "https://github.com/Prasanna-Stha/educateNepal",
      tags: ["HTML", "CSS", "JavaScript", "Education"],
    },
    {
      title: "MAW Hire Purchase",
      description:
        "A Nepal-based financing service offering flexible installment plans for individuals and businesses to own vehicles, equipment, and gadgets.",
      link: "https://www.mawhirepurchase.com.np",
      tags: ["Finance", "Service", "Business"],
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
    <section className="bg-gray-900 text-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-4xl font-bold text-blue-500">My Projects</h2>
          
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* View Toggle Button */}
            <button
              onClick={toggleViewMode}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
            >
              <FontAwesomeIcon 
                icon={viewMode === "grid" ? faList : faTh} 
                className="text-blue-500"
              />
              <span className="text-white hidden sm:inline">
                {viewMode === "grid" ? "List View" : "Grid View"}
              </span>
            </button>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No projects found matching your search.</p>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out h-full flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-300 hover:text-white font-semibold inline-block mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-300 hover:text-white font-semibold whitespace-nowrap md:ml-4"
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