import React from "react";
import Banner from "./Banner";
import NewsletterSection from "./NewsletterSection";
import PopularGames from "./PopularGames";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;
