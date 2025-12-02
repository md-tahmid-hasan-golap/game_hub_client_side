import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";

const AllGamesCardsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

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
    description,
    developer,
  } = allgame;

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 md:px-8 lg:px-16">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline hover:bg-gray-100 transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cover Image */}
        <div className="md:w-1/2">
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-64 md:h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            <span className="badge badge-outline text-lg mb-4 inline-block">
              {category}
            </span>

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
          </div>

          {/* Download Button */}
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full md:w-auto"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllGamesCardsDetails;
