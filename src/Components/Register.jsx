import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const acceptTerms = form.acceptTerms.checked;

    if (!acceptTerms) {
      Swal.fire({
        title: "You must accept the Terms & Conditions!",
        icon: "warning",
      });
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Weak Password!",
        text: "Password must have at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long.",
        icon: "error",
      });
      return;
    }

    // Create user with Firebase
    creatUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Register Successful!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Registration Failed!",
          text: error.message,
          icon: "error",
          draggable: true,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "Sign In with Google Successful!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Sign In Failed!",
          text: error.message,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-slate-900 px-4 my-7 rounded-lg">
      <div className="card w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl rounded-lg">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Register Your Account
          </h1>
          <hr className="my-5 border-gray-300 dark:border-slate-600" />

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1"
                required
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="acceptTerms"
                className="checkbox checkbox-sm"
                required
              />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Accept{" "}
                <a href="#" className="font-bold link link-hover">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <button className="btn btn-neutral w-full mt-4">Register</button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full mt-4 flex items-center justify-center gap-2"
          >
            <FcGoogle size={25} /> Sign In with Google
          </button>

          <p className="text-center py-4 text-gray-700 dark:text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
