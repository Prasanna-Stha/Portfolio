import paruImg from "../assets/prasanna.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGlobe, 
  faPhoneAlt, 
  faMapMarkerAlt, 
  faGraduationCap, 
  faEnvelope, 
  faUserTie,
  faCode,
  faPalette,
  faChartLine,
  faDatabase,
  faMobileAlt,
  faServer,
  faSearchDollar,
  faShieldAlt,
  faRobot,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

const AboutMe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);

  const expertise = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Building responsive websites with React, Next.js, and modern frameworks."
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces focused on user experience."
    },
    {
      icon: faChartLine,
      title: "Digital Marketing",
      description: "SEO and social media strategies to boost online presence."
    },
    {
      icon: faDatabase,
      title: "Database Management",
      description: "SQL and NoSQL database design and optimization."
    },
    {
      icon: faMobileAlt,
      title: "Mobile Development",
      description: "Cross-platform apps with React Native and Flutter."
    },
    {
      icon: faServer,
      title: "Backend Development",
      description: "Server-side applications with Node.js and Django."
    },
    {
      icon: faSearchDollar,
      title: "E-Commerce",
      description: "Online stores with payment gateways and inventory."
    },
    {
      icon: faShieldAlt,
      title: "Cyber Security",
      description: "Implementing security best practices for web apps."
    },
    {
      icon: faRobot,
      title: "AI Integration",
      description: "Implementing AI features in web applications."
    },
    {
      icon: faCloud,
      title: "Cloud Services",
      description: "Deployment and management on AWS and Azure."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, expertise.length - visibleCards));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Unified Profile Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16 p-6 sm:p-8 rounded-lg bg-gray-50">
          {/* Profile Image */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-blue-500 overflow-hidden shadow-md">
            <img
              src={paruImg}
              alt="Prasanna Shrestha"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Prasanna Shrestha</h1>
              <h3 className="text-lg sm:text-xl text-blue-500">Passionate Frontend Developer</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Passionate IT professional with expertise in web development and digital marketing. 
              Dedicated to creating innovative, user-centric solutions that bridge technology 
              and business needs. Currently pursuing BSc. (Hons.) IT while freelancing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-sm" />
                </div>
                <a href="mailto:sthaprasanna131@gmail.com" className="text-blue-600 hover:underline text-sm sm:text-base">
                  sthaprasanna131@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600 text-sm" />
                </div>
                <span className="text-gray-600 text-sm sm:text-base">+977 9707191551</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-sm" />
                </div>
                <span className="text-gray-600 text-sm sm:text-base">Kathmandu, Nepal</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-sm" />
                </div>
                <a 
                  href="http://www.shresthaprasanna.com.np" 
                  className="text-blue-600 hover:underline text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shresthaprasanna.com.np
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Carousel Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">My Expertise</h3>
          
          <div className="relative">
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="overflow-hidden"
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
                  width: `${(expertise.length / visibleCards) * 30}%`
                }}
              >
                {expertise.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 p-2"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg p-6 h-full transition-all duration-300">
                      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                        <FontAwesomeIcon icon={item.icon} className="text-blue-600 text-xl" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">{item.title}</h4>
                      <p className="text-gray-600 text-center text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''} -ml-4`}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              disabled={currentSlide >= expertise.length - visibleCards}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors ${currentSlide >= expertise.length - visibleCards ? 'opacity-50 cursor-not-allowed' : ''} -mr-4`}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: expertise.length - visibleCards + 1 }).map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;