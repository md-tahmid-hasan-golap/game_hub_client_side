import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Name */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-black text-white p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M3 2l18 10L3 22V2z" />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold 
               bg-gradient-to-r from-purple-500 to-blue-600 
               text-transparent bg-clip-text"
            >
              GameHub
            </h2>
          </div>

          <p className="text-gray-400">
            Discover games, explore developers, and enjoy a seamless gaming
            experience with GameHub.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allGames" className="hover:text-blue-400">
                All Games
              </Link>
            </li>
            <li>
              <Link to="/featuredDevelopers" className="hover:text-blue-400">
                Featured Developers
              </Link>
            </li>
            <li>
              <Link to="/myProfile" className="hover:text-blue-400">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Important</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-400">
                Register
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>

          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/g.lap.raj"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/md-tahmid-hasan-golap"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © 2025 GameHub — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
