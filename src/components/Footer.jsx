import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Top Section - Social Links */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.facebook.com/share/1QWCENFrbE/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://x.com/Prasanna_131?t=Su09aVF6fU7aLzbUyrPV3w&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanna-shrestha-a403161bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/Prasanna-Stha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        {/* Middle Section - Links */}
        <div className="text-center mb-6">
          <Link
            to="home"
            smooth={true}
            duration="500"
            className="cursor-pointer text-sm hover:text-gray-400 transition duration-300 px-3"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration="500"
            className="cursor-pointer text-sm hover:text-gray-400 transition duration-300 px-3"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration="500"
            className="cursor-pointer text-sm hover:text-gray-400 transition duration-300 px-3"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration="500"
            className="cursor-pointer text-sm hover:text-gray-400 transition duration-300 px-3"
          >
            Contact
          </Link>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Paru. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
