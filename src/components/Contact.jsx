import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
  faCommentDots,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/xeoawbvp";

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-12 w-fit mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Contact me
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-500 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="text-gray-300">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-blue-500"
                />
                <p>
                  <strong>Email:</strong> sthaprasanna131@gmail.com
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-3 text-blue-500"
                />
                <p>
                  <strong>Phone:</strong> +977 9707191551
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-blue-500"
                />
                <p>
                  <strong>Location:</strong> Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Name
                </label>
                <div className="flex items-center bg-gray-700 p-3 rounded-md">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-300 mr-3"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-300 focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="flex items-center bg-gray-700 p-3 rounded-md">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-300 mr-3"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-300 focus:outline-none"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="flex items-start bg-gray-700 p-3 rounded-md">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-gray-300 mr-3"
                  />
                  <textarea
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
                {isSubmitted ? "Message Sent ✅" : "Send Message"}
              </button>

              {isSubmitted && (
                <p className="text-green-400 text-center mt-4">
                  Thank you! I’ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
