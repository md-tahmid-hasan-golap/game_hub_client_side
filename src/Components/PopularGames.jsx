import React from "react";
import { useLoaderData } from "react-router";
import PopularGamesCards from "./PopularGamesCards";

const PopularGames = () => {
  const data = useLoaderData();

  // Top 3 games by rating
  const topGames = [...data]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <section className="my-7 px-4  max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-medium mb-7  text-amber-500">
        Popular Games
      </h2>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topGames.map((popularGame) => (
          <PopularGamesCards key={popularGame.id} popularGame={popularGame} />
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
