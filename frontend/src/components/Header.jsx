import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center text-gray-900 font-semibold text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-blue-700 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-0.5">OJLA</span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-lg space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};


export default Header;