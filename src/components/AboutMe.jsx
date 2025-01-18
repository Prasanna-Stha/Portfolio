import React from 'react';
import paruImg from "../assets/prasanna.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhoneAlt, faMapMarkerAlt, faGraduationCap, faEnvelope, faUserTie } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div className="py-16 px-6 bg-gray-50" id="about">
      <div className="max-w-screen-lg mx-auto">

        {/* Image and Description Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
          <div className="flex-shrink-0 w-32 sm:w-48 h-32 sm:h-48 rounded-full shadow-md object-cover border-2 border-indigo-600">
            <img
              src={paruImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="text-center sm:text-left sm:ml-6 flex-1 space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">Hello, I'm Prasanna!</h1>
            <p className="text-lg text-gray-700">
              Passionate IT enthusiast skilled in digital marketing, web development, and creative solutions. Focused on building user-centric experiences.
            </p>
          </div>
        </div>

        {/* Contact Information Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faGlobe} className="mr-4 text-indigo-600" />
              <span className="font-medium">Website:</span>
              <a
                href="http://www.prasanna.com.np"
                className="text-indigo-600 hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.prasanna.com.np
              </a>
            </p>
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-4 text-indigo-600" />
              <span className="font-medium">Phone:</span> +977 9755107191
            </p>
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 text-indigo-600" />
              <span className="font-medium">City:</span> Kathmandu, Nepal
            </p>
          </div>

          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-4 text-indigo-600" />
              <span className="font-medium">Degree:</span> BSc. (Hons.) IT
            </p>
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-indigo-600" />
              <span className="font-medium">Email:</span>
              <a
                href="mailto:sthaprasanna131@gmail.com"
                className="text-indigo-600 hover:underline ml-2"
              >
                sthaprasanna131@gmail.com
              </a>
            </p>
            <p className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faUserTie} className="mr-4 text-indigo-600" />
              <span className="font-medium">Freelance:</span> Available
            </p>
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div className="mt-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 mt-4">
            Experienced in front-end technologies, with a strong passion for web development and innovative digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
