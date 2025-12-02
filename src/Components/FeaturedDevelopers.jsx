import React from "react";

// Example JSON data (normally তুমি আলাদা data file থেকে import করবে)
const developers = [
  {
    id: "1",
    name: "Krafton",
    profilePic:
      "https://i.ibb.co.com/RGyxSCn7/240-F-943578558-Cg1w-Nm-NRQn-Pr7l-C8-Sgmh1-PDNG5xa-BNKi.jpg",
    bio: "Creators of PUBG. Focus on immersive gameplay.",
    games: ["PUBG", "PUBG Mobile Lite"],
    website: "https://www.krafton.com/",
  },
  {
    id: "2",
    name: "Epic Games",
    profilePic:
      "https://i.ibb.co.com/KxMR0Mwr/man-racing-dirt-bike-fantasy-environment.jpg",
    bio: "Creators of Fortnite. Known for innovative gaming experiences.",
    games: ["Fortnite", "Rocket League"],
    website: "https://www.epicgames.com/",
  },
  {
    id: "3",
    name: "Supercell",
    profilePic: "https://i.ibb.co.com/S4FNMWmt/anime-style-character-space.jpg",
    bio: "Creators of Clash of Clans. Mobile game specialists.",
    games: ["Clash of Clans", "Clash Royale"],
    website: "https://supercell.com/",
  },
];

const FeaturedDevelopers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-500">
        Featured Developers
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={dev.profilePic}
              alt={dev.name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-green-500"
            />
            <h3 className="text-xl font-semibold mb-2">{dev.name}</h3>
            <p className="text-gray-600 mb-2">{dev.bio}</p>
            <p className="text-gray-500 mb-4">
              <span className="font-semibold">Games:</span>{" "}
              {dev.games.join(", ")}
            </p>
            <a
              href={dev.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-600 text-white hover:bg-blue-700"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDevelopers;
