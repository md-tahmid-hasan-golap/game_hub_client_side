import React, { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const AllGamesCardsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const [showFull, setShowFull] = useState(false); // Read More toggle

  const allgame = data.find((game) => game.id == id);

  if (!allgame) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Game not found!</h2>
      </div>
    );
  }

  const {
    title,
    coverPhoto,
    category,
    ratings,
    downloadLink,
    shortDescription,
    fullDescription,
    developer,
  } = allgame;

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 md:px-8 lg:px-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline mb-6 hover:bg-blue-600 hover:text-white transition-colors duration-300"
      >
        ← Back
      </button>

      {/* Cover Image with motion */}
      <motion.img
        src={coverPhoto}
        alt={title}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Title and Category */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <motion.h1
          className="text-4xl font-medium bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text mb-2 md:mb-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <span className="badge badge-outline text-lg">{category}</span>
      </div>

      {/* Ratings */}
      <div className="flex items-center mb-4">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="font-semibold">{ratings} / 5</span>
      </div>

      {/* Developer */}
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Developer:</span> {developer}
      </p>

      {/* Short Description */}
      <p className="text-gray-600 mb-4 italic">{shortDescription}</p>

      {/* Full Description with Read More */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6"
      >
        <p className="text-gray-800 leading-relaxed">
          {showFull ? fullDescription : `${fullDescription.slice(0, 150)}...`}
        </p>
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-blue-600 font-semibold mt-2 hover:underline"
        >
          {showFull ? "Show Less" : "Read More"}
        </button>
      </motion.div>

      {/* Download Button Right Aligned */}
      <div className="flex justify-end">
        <motion.a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center py-3 px-6 rounded-lg font-semibold text-white
                     bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Now
        </motion.a>
      </div>
    </div>
  );
};

export default AllGamesCardsDetails;
