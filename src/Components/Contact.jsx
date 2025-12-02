import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-20 my-7 rounded-lg">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        Contact Us
      </h2>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-gray-800">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span>01707115247</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span>golapraj47@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span>MD. TAHMID HASAN GOLAP</span>
          </div>
          <div className="flex items-center gap-4 text-gray-800">
            <a
              href="https://www.facebook.com/g.lap.raj"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/md-tahmid-hasan-golap"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-black text-2xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/tahmid-hasan-golap/?locale=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
