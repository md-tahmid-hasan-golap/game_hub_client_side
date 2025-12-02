import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const PopularGamesCards = ({ popularGame }) => {
  const { id, title, coverPhoto, category, ratings } = popularGame;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
      className="card bg-base-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300"
    >
      {/* Game Image */}
      <figure className="h-48 overflow-hidden">
        <motion.img
          src={coverPhoto}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* Category & Ratings */}
        <div className="flex items-center justify-between mt-1 mb-2">
          <span className="badge badge-outline">{category}</span>
          <span className="flex items-center text-yellow-500 font-semibold">
            <FaStar className="mr-1" />
            {ratings}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-3">
          Discover full details and download options.
        </p>

        {/* Gradient Button */}
        <Link
          to={`/popularGameDetails/${id}`}
          className="block text-center w-full py-2 rounded-md font-semibold text-white 
          bg-gradient-to-r from-purple-500 to-blue-600 
          hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PopularGamesCards;
