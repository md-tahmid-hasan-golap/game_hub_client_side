import React, { useContext, useEffect, useMemo } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Map routes to readable names
  const routeNameMap = {
    "/": "Home",
    "/allGames": "All Games",
    "/featuredDevelopers": "Featured Developers",
    "/login": "Login",
    "/register": "Register",
    "/myProfile": "My Profile",
  };

  // 🔹 Detect current route name
  const currentRouteName = useMemo(() => {
    if (routeNameMap[location.pathname]) {
      return routeNameMap[location.pathname];
    }
    // Example for dynamic routes (like /game/123)
    if (location.pathname.startsWith("/game/")) {
      return "Game Details";
    }
    return "GameHub";
  }, [location.pathname]);

  // 🔹 Update tab title dynamically
  useEffect(() => {
    document.title = `${currentRouteName} | GameHub`;
  }, [currentRouteName]);

  // 🔹 Logout
  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // 🔹 Navbar links
  const links = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn mr-2 bg-blue-600 text-white" : "btn mr-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/allGames"
          className={({ isActive }) =>
            isActive ? "btn mr-2 bg-blue-600 text-white" : "btn mr-2"
          }
        >
          All Games
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/featuredDevelopers"
          className={({ isActive }) =>
            isActive ? "btn mr-2 bg-blue-600 text-white" : "btn mr-2"
          }
        >
          Featured Developers
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        {/* 🔹 Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* 🔹 Left: Logo & Route Name */}
        <div className="flex items-center gap-4">
          <button className="btn bg-black text-white hover:bg-gray-900">
            <FaGooglePlay size={20} />
            <span className="hidden sm:inline">Google Play</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold hidden md:flex text-amber-500">
              GameHub
            </h1>
            <span className="text-sm text-gray-500">{currentRouteName}</span>
          </div>
        </div>
      </div>

      {/* 🔹 Center Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* 🔹 Right: Profile or Login/Register */}
      <div className="navbar-end gap-3 mr-5">
        {user ? (
          <>
            <Link to="/myProfile">
              <img
                className="w-10 h-10 rounded-full border-2 border-green-600"
                src={user.photoURL}
                alt="User"
                title={user.displayName}
              />
            </Link>
            <button
              onClick={handelLogout}
              className="btn bg-red-600 text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
