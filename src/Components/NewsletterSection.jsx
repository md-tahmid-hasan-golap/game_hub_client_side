import React, { useState } from "react";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-medium text-amber-500">
        Our Newsletter
      </h2>{" "}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-purple-600 to-pink-500 py-16 px-4 my-7 rounded-lg"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-lg md:text-xl"
          >
            Get the latest updates about new games, offers, and exclusive
            content straight to your inbox.
          </motion.p>

          <motion.form
            onSubmit={handleSubscribe}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-96 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default NewsletterSection;
