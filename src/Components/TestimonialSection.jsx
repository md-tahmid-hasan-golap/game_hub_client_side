import React from "react";

const testimonials = [
  {
    text: "GameHub is a fantastic platform to discover indie games and support developers. The interface is smooth and user-friendly!",
    name: "John Doe",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "I love how easy it is to find top-rated games and check details before installing. Highly recommended for gamers!",
    name: "Jane Smith",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    text: "GameHub keeps everything organized, responsive, and secure. It’s my go-to library for discovering new games.",
    name: "Michael Johnson",
    img: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialSection = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      {/* Section Title */}
      <h2
        className="text-center text-4xl font-bold 
                   bg-gradient-to-r from-purple-500 to-blue-600 
                   text-transparent bg-clip-text mb-12"
      >
        What Our Users Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
          >
            {/* Testimonial Text */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "{item.text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
              />
              <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text">
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
