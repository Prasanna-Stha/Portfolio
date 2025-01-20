import React from "react";

const Timeline = () => {
  const milestones = [
    {
      date: "2021",
      title: "Started Learning Web Development",
      description: "I took my first step into web development by learning HTML, CSS, and JavaScript.",
    },
    {
      date: "2022",
      title: "Joined Techspire College",
      description: "I enrolled in Techspire College to pursue my Bachelor's degree in IT.",
    },
    {
      date: "2023",
      title: "First Web Development Job",
      description: "I started my first job as a junior web developer, building websites for clients.",
    },
    {
      date: "2024",
      title: "Started My Portfolio",
      description: "I decided to build my own portfolio to showcase my skills and projects.",
    },
    // Add more milestones as needed
  ];

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">My Journey</h2>
      <div className="relative">
        {/* Vertical Timeline Line (always visible in the center) */}
        <div className="border-l-2 border-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <div
              className={`relative flex items-center flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              key={index}
            >
              {/* Milestone Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full ring-4 ring-white shadow-md z-10" />

              {/* Event Content */}
              <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full`}>
                <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
                  <div className="text-sm text-gray-500">{milestone.date}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">{milestone.title}</h3>
                  <p className="text-gray-600 mt-2">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
