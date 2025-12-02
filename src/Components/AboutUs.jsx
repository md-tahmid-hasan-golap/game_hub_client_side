import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 my-7 text-gray-700 leading-relaxed">
      {/* Title */}
      <h2
        className="text-4xl font-medium text-center 
             bg-gradient-to-r from-purple-500 to-blue-600 
             text-transparent bg-clip-text mb-10"
      >
        About GameHub
      </h2>

      {/* Paragraphs */}
      <p className="text-lg mb-6">
        GameHub is your friendly indie game platform. We are passionate about
        connecting gamers and developers from all around the world. Our goal is
        to bring fun, creativity, and unique gaming experiences to everyone.
      </p>

      <p className="text-lg mb-6">
        At GameHub, quality and community are our top priorities. We work
        closely with indie developers to ensure every game delivers excitement,
        entertainment, and memorable moments. Our mission is to make gaming more
        accessible and enjoyable for all.
      </p>

      <p className="text-lg mb-6">
        Join our GameHub family and explore a world full of creative, colorful,
        and engaging indie games. Discover new adventures, support your favorite
        developers, and be part of a growing global gamer community.
      </p>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} GameHub — Connecting Gamers & Developers
      </p>
    </div>
  );
};

export default AboutUs;
