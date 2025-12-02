import React, { useContext, useEffect, useMemo } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Route Names
  const routeNameMap = {
    "/": "Home",
    "/allGames": "All Games",
    "/featuredDevelopers": "Featured Developers",
    "/login": "Login",
    "/register": "Register",
    "/myProfile": "My Profile",
  };

  const currentRouteName = useMemo(() => {
    if (routeNameMap[location.pathname]) {
      return routeNameMap[location.pathname];
    }
    if (location.pathname.startsWith("/game/")) {
      return "Game Details";
    }
    return "GameHub";
  }, [location.pathname]);

  // Update Tab Title only
  useEffect(() => {
    document.title = `${currentRouteName} | GameHub`;
  }, [currentRouteName]);

  // Logout
  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // Navbar Links
  const links = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white hover:text-blue-400"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="font-semibold">
        <NavLink
          to="/allGames"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white hover:text-blue-400"
          }
        >
          All Games
        </NavLink>
      </li>

      <li className="font-semibold">
        <NavLink
          to="/featuredDevelopers"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white hover:text-blue-400"
          }
        >
          Featured Developers
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white hover:text-blue-400"
          }
        >
          About Us
        </NavLink>
      </li>

      {user && (
        <li className="font-semibold">
          <NavLink
            to="/myProfile"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white hover:text-blue-400"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 navbar">
        {/* LEFT SECTION */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#1e293b] text-white rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <button className="btn bg-black text-white hover:bg-gray-900">
              <FaGooglePlay size={20} />
            </button>

            <h1 className="text-xl md:text-xl hidden md:flex font-bold text-white">
              GameHub
            </h1>
          </div>
        </div>

        {/* CENTER NAV LINKS */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">{links}</ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <Link to="/myProfile">
                <img
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                  src={user.photoURL}
                  alt="User"
                  title={user.displayName}
                />
              </Link>

              <button
                onClick={handelLogout}
                className="btn bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline text-white hover:bg-blue-600 "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline text-white hover:bg-blue-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
