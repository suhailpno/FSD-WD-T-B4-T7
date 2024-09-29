// src/NavBar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaStar,
  FaInfoCircle,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaBell,
} from "react-icons/fa";

const NavBar = ({ setSearchResults }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(3); // Example notification count
  const navigate = useNavigate();

  // Toggle user profile dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Optionally, persist theme preference using localStorage or context
  };

  // Handle navigation link click: reset search and close mobile menu
  const handleNavLinkClick = () => {
    setSearchResults([]);
    navigate("/");
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  // Close mobile menu on window resize (desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Handle dark mode class on document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="z-10 fixed bg-gradient-to-r from-gray-800 to-black shadow-lg w-full">
      <div className="flex justify-between items-center mx-auto p-4 container">
        {/* Title */}
        <Link
          to="/"
          className="font-bold text-2xl text-white"
          onClick={handleNavLinkClick}
        >
          Movie Search App
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="md:flex items-center space-x-8 hidden text-gray-300">
          <li>
            <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                `flex items-center hover:text-white transition ${
                  isActive ? "text-red-500 border-b-2 border-red-500" : ""
                }`
              }
              onClick={handleNavLinkClick}
              aria-label="Home"
            >
              <FaHome className="mr-1" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                `flex items-center hover:text-white transition ${
                  isActive ? "text-red-500 border-b-2 border-red-500" : ""
                }`
              }
              onClick={() => {
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
              aria-label="Popular Movies"
            >
              <FaStar className="mr-1" />
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-rated"
              className={({ isActive }) =>
                `flex items-center hover:text-white transition ${
                  isActive ? "text-red-500 border-b-2 border-red-500" : ""
                }`
              }
              onClick={() => {
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
              aria-label="Top Rated Movies"
            >
              <FaStar className="mr-1" />
              Top Rated
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center hover:text-white transition ${
                  isActive ? "text-red-500 border-b-2 border-red-500" : ""
                }`
              }
              onClick={() => {
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
              aria-label="About"
            >
              <FaInfoCircle className="mr-1" />
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-300 hover:text-white transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <FaBell
              className="text-gray-300 text-xl hover:text-white transition cursor-pointer"
              aria-label="Notifications"
            />
            {notifications > 0 && (
              <span className="-top-1 -right-1 absolute bg-red-600 px-1 rounded-full text-white text-xs">
                {notifications}
              </span>
            )}
          </div>

          {/* User Profile Icon */}
          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <div className="flex items-center text-gray-300 cursor-pointer">
              <FaUserCircle className="text-2xl" />
              <span className="md:block hidden ml-2 text-white">User</span>
            </div>
            {dropdownOpen && (
              <div className="right-0 z-20 absolute bg-gray-800 shadow-lg mt-2 rounded-lg w-48 transition-all duration-300">
                <Link
                  to="/profile"
                  className="flex items-center hover:bg-gray-700 px-4 py-2 text-gray-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center hover:bg-gray-700 px-4 py-2 text-gray-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="flex items-center hover:bg-gray-700 px-4 py-2 text-gray-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={handleMobileMenuToggle} className="text-gray-300">
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
              <NavLink
                to="/"
                exact
                className={({ isActive }) =>
                  `flex items-center hover:text-white transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
                onClick={handleNavLinkClick}
                aria-label="Home"
              >
                <FaHome className="mr-1" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  `flex items-center hover:text-white transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
                onClick={() => {
                  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                }}
                aria-label="Popular Movies"
              >
                <FaStar className="mr-1" />
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top-rated"
                className={({ isActive }) =>
                  `flex items-center hover:text-white transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
                onClick={() => {
                  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                }}
                aria-label="Top Rated Movies"
              >
                <FaStar className="mr-1" />
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center hover:text-white transition ${
                    isActive ? "text-red-500" : ""
                  }`
                }
                onClick={() => {
                  if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                }}
                aria-label="About"
              >
                <FaInfoCircle className="mr-1" />
                About
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
