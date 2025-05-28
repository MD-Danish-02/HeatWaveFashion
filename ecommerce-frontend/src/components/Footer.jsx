import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center p-8 mt-16 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg mb-4 opacity-90">
          &copy; {new Date().getFullYear()} HeatWave Fashion. All rights
          reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 md:space-x-10 text-md mb-6">
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-105"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-105"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-105"
          >
            Support
          </a>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-pink-300">
            Connect With Md Danish Alam
          </h3>
          <div className="flex justify-center space-x-8 text-lg">
            <a
              href="https://www.instagram.com/wanderof_the_mind"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-110 flex items-center"
              aria-label="Instagram Profile"
            >
              <i className="fab fa-instagram mr-2"></i> @wanderof_the_mind
            </a>
            <a
              href="https://twitter.com/MdDanis62072528"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-110 flex items-center"
              aria-label="X (formerly Twitter) Profile"
            >
              <i className="fab fa-twitter mr-2"></i> @MdDanis62072528
            </a>
          </div>
        </div>

        <p className="mt-8 text-md opacity-80">
          Developed with <span className="text-red-500">&hearts;</span> by Md
          Danish Alam
        </p>
      </div>
    </footer>
  );
}

export default Footer;
