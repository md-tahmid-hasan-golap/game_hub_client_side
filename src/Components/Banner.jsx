import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Homepage Banner Data (Gamehub)
const slides = [
  {
    id: 1,
    title: "Battle Royale Adventure",
    bgImage:
      "https://i.ibb.co.com/GQnS922S/istockphoto-2184912955-612x612.webp",
  },
  {
    id: 2,
    title: "Epic Fantasy Quest",
    bgImage:
      "https://i.ibb.co.com/fVQfsTmy/istockphoto-2121353141-612x612.webp",
  },
  {
    id: 3,
    title: "Racing Champions",
    bgImage:
      "https://i.ibb.co.com/yFwJRfMy/istockphoto-2206836726-612x612.webp",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 my-7">
      <Slider {...settings}>
        {slides.map(({ id, bgImage, title }) => (
          <div key={id}>
            <div
              className="h-[250px] sm:h-[300px] md:h-[400px] flex justify-center items-end px-6 sm:px-8 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Motion Title Overlay */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg mb-4 text-lg sm:text-xl md:text-2xl font-semibold"
              >
                {title}
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
