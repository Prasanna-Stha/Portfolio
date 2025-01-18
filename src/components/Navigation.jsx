import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close Mobile Menu after link click
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Header Section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
        >
          <h1 className="cursor-pointer text-2xl font-bold tracking-wide transition duration-300 ease-in-out hover:text-blue-500">
            Paru
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="w-4 h-4" />
            <span>Projects</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Navigation - Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        style={{ width: "75vw" }}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold tracking-wide text-center">Paru</h1>
        </div>
        <div className="mt-6 flex flex-col space-y-6 px-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="w-4 h-4" />
            <span>Projects</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
