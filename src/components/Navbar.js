import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-red-600 mr-6">
        <span className="font-semibold text-3xl tracking-tight">
          The Coffee Space
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <ul className="navbar-nav  block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl hover:text-white mr-4 ">
            <li className="nav-item">
              <Link className="nav-link block mt-4 lg:inline-block lg:mt-0  text-xl hover:text-white mr-4" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
