import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa"; // React icon import

const PopularGamesCards = ({ popularGame }) => {
  const { id, title, coverPhoto, category, ratings } = popularGame;

  return (
    <Link
      to={`/popularGameDetails/${id}`}
      className="card bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Game Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
        <p className="text-sm text-gray-600">
          Click to view full game details and download link.
        </p>
      </div>
    </Link>
  );
};

export default PopularGamesCards;
