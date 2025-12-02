import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="my-12 max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg text-center text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Join GameHub Today!</h2>
      <p className="mb-6">
        Discover the best indie games and support developers worldwide.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/register"
          className="btn bg-white text-purple-600 font-bold hover:bg-gray-100"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="btn btn-outline text-white border-white hover:bg-white hover:text-purple-600"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
