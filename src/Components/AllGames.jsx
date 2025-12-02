import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AllGamesCards from "./AllGamesCards";
import { FaSearch } from "react-icons/fa";

const AllGames = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered games based on search
  const filteredData = data.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-7 max-w-6xl mx-auto px-4">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-7 gap-4">
        <h2
          className="text-4xl font-medium 
                     bg-gradient-to-r from-purple-500 to-blue-600 
                     text-transparent bg-clip-text"
        >
          All Games
        </h2>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredData.map((allcard) => (
          <AllGamesCards key={allcard.id} allcard={allcard}></AllGamesCards>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
