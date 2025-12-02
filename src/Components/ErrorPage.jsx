import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white p-4">
      {/* 404 Number */}
      <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-extrabold mb-4 drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-semibold text-center">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="mb-8 text-center text-base sm:text-lg md:text-xl max-w-md md:max-w-lg drop-shadow-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Go Back Button */}
      <Link
        to="/"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
