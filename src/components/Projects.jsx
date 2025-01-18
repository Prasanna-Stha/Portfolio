import React from "react";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "LinkedIn Clone",
      description:
        "A responsive LinkedIn clone built with React, designed to mimic the features of LinkedIn with custom functionalities.",
      link: "https://github.com/Prasanna-Stha/LinkedIn",
    },
    {
      title: "Community Waste Reduction Platform",
      description:
        "A platform designed to encourage waste reduction and community participation, focusing on sustainable living.",
      link: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce website with a user-friendly interface, built with React and Node.js.",
      link: "#",
    },
    {
      title: "To-Do List",
      description:
        "A simple to-do list web app built with React and Tailwind for task management.",
      link: "https://github.com/Prasanna-Stha/to-Do-List",
    },
    {
      title: "educateNepal",
      description:
        "An online learning platform built with pure HTML, CSS, and JavaScript, focused on providing educational resources to Nepali students.",
      link: "https://github.com/Prasanna-Stha/educateNepal",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-300 hover:text-white font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
