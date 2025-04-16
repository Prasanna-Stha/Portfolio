import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhoneAlt, faCommentDots, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-gray-900 text-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-semibold text-center text-blue-500 mb-10">Contact Me</h2>

        <div className="flex flex-col sm:flex-row justify-between gap-12">
          {/* Contact Information */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-500 mb-6">Get in Touch</h3>
            <p className="text-lg text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="text-gray-300">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-500" />
                <p>
                  <strong>Email:</strong> sthaprasanna131@gmail.com
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-blue-500" />
                <p>
                  <strong>Phone:</strong> +977 9707191551
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-blue-500" />
                <p>
                  <strong>Location:</strong> Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:w-2/3">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <div className="flex items-center bg-gray-700 p-3 rounded-md">
                  <FontAwesomeIcon icon={faUser} className="text-gray-300 mr-3" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-300 focus:outline-none"
                    placeholder="Your Name"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <div className="flex items-center bg-gray-700 p-3 rounded-md">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-300 mr-3" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-300 focus:outline-none"
                    placeholder="Your Email"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <div className="flex items-start bg-gray-700 p-3 rounded-md">
                  <FontAwesomeIcon icon={faCommentDots} className="text-gray-300 mr-3" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-300 focus:outline-none"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300"
              >
                {isSubmitted ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
