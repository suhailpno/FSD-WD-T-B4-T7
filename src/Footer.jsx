// src/Footer.jsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black shadow-lg py-8 text-white">
      <div className="mx-auto px-4 text-center container">
        {/* Company Info */}
        <div className="mb-6">
          <h1 className="mb-2 font-bold text-2xl">Movie Search App</h1>
          <p className="text-base text-gray-400">
            Discover and explore your favorite movies and series.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="relative mb-6">
          {showAlert && (
            <div className="top-[-50px] left-1/2 absolute bg-green-600 shadow-lg px-4 py-2 rounded-lg text-white transform -translate-x-1/2">
              <p>Thank you for subscribing!</p>
            </div>
          )}

          <form
            onSubmit={handleSubscribe}
            className="flex sm:flex-row flex-col justify-center items-center"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="bg-gray-700 sm:mr-2 mb-2 sm:mb-0 px-4 py-2 border-none rounded-full focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 focus:outline-none w-full sm:w-auto"
              required
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full w-full sm:w-auto text-white transition duration-300"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-gray-500 text-sm">
          <p>&copy; About Movie Search App - No Rights Reserved</p>
        </div>
      </div>

      {/* Source Code Button */}
      <a
        href="https://github.com/suhailpno/FSD-WD-T-B4-T7.git"
        target="_blank"
        rel="noopener noreferrer"
        className="right-4 bottom-4 fixed flex items-center bg-gray-800 hover:bg-gray-700 shadow-lg p-3 rounded-full transition-colors duration-300"
        aria-label="GitHub repository"
      >
        <FaGithub className="mr-2 text-4xl text-white" />
        <span className="sm:inline hidden font-semibold text-sm text-white">
          Source Code
        </span>
      </a>
    </footer>
  );
};

export default Footer;
