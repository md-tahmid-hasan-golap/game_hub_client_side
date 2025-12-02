import React from "react";
import Banner from "./Banner";
import NewsletterSection from "./NewsletterSection";
import PopularGames from "./PopularGames";

import CallToAction from "./CallToAction";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <NewsletterSection></NewsletterSection>
      <TestimonialSection></TestimonialSection>

      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
