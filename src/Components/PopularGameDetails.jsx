import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";

const PopularGameDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  const popularGameDetails = data.find((popularGame) => popularGame.id == id);

  if (!popularGameDetails) {
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
    description,
    developer,
  } = popularGameDetails;

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 md:px-8 lg:px-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // আগের page এ যাবে
        className="btn btn-outline mb-6"
      >
        ← Back
      </button>

      {/* Cover Image */}
      <img
        src={coverPhoto}
        alt={title}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Title and Category */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-0">{title}</h1>
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

      {/* Description */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Download Button */}
      <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Download Now
      </a>
    </div>
  );
};

export default PopularGameDetails;
