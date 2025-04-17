import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode, faPalette, faChartLine, faDatabase,
  faMobileAlt, faServer, faSearchDollar, faShieldAlt,
  faRobot, faCloud, faEnvelope, faPhoneAlt, faMapMarkerAlt, faGlobe
} from "@fortawesome/free-solid-svg-icons";
import paruImg from "../assets/prasanna.jpg";

const AboutMe = () => {
  const personalInfo = [
    { icon: faEnvelope, text: "sthaprasanna131@gmail.com", link: "mailto:sthaprasanna131@gmail.com" },
    { icon: faPhoneAlt, text: "+977 9707191551" },
    { icon: faMapMarkerAlt, text: "Kathmandu, Nepal" },
    { icon: faGlobe, text: "shresthaprasanna.com.np", link: "http://shresthaprasanna.com.np" }
  ];

  const expertise = [
    { icon: faCode, title: "Web Dev", description: "React, Chakra UI, Modern Frameworks" },
    { icon: faPalette, title: "UI/UX", description: "User-Centered Interfaces" },
    { icon: faChartLine, title: "Digital Marketing", description: "SEO & Social Media" },
    { icon: faShieldAlt, title: "Security", description: "Web App Protection" },
    { icon: faRobot, title: "AI", description: "Smart Features" }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 w-fit mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-sm">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src={paruImg}
              alt="Prasanna Shrestha"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-1 lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Prasanna Shrestha</h1>
            <p className="text-blue-600 text-lg mb-6">Frontend Developer & Digital Creator</p>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate IT professional specializing in modern web development and digital solutions.
              Focused on creating performant, accessible, and visually appealing applications.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center lg:justify-start">
                  <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                    <FontAwesomeIcon icon={item.icon} className="text-blue-600" />
                  </div>
                  {item.link ? (
                    <a href={item.link} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-700">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;