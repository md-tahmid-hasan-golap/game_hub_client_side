import React from "react";
import { useLoaderData } from "react-router";
import AllGamesCards from "./AllGamesCards";

const AllGames = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="my-7 max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-medium mb-7  text-amber-500">
        {" "}
        All Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((allcard) => (
          <AllGamesCards key={allcard.id} allcard={allcard}></AllGamesCards>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
