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
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-700">
      {/* Header Section */}
      <div className="container mx-auto flex items-center justify-between py-6 px-8">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500}>
          <h1 className="cursor-pointer text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 ease-in-out hover:text-white">
            &lt;/paru&gt;
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
          >
            <FontAwesomeIcon icon={faHome} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">Home</span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
          >
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">About</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">Projects</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">Contact</span>
          </Link>
          
          {/* Hire Me Button - Desktop */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6 text-white transition-all duration-300 ease-in-out" />
        </button>
      </div>

      {/* Mobile Navigation - Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out sm:hidden`}
        style={{ width: "75vw" }}
      >
        <div className="p-4">
          <Link 
            to="home"
            smooth={true}
            duration="500"
            className="text-2xl font-bold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
            onClick={closeMenu}>
            &lt;/paru&gt;
          </Link>
        </div>
        <div className="mt-6 flex flex-col space-y-6 px-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faHome} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">Home</span>
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">About</span>
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">Projects</span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg flex items-center space-x-3 hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out group"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="transition-all duration-300 ease-in-out group-hover:text-blue-500">Contact</span>
          </Link>
          
          {/* Hire Me Button - Mobile */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            onClick={closeMenu}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;