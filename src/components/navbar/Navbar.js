import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-alphaPurple">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="text-white font-bold text-lg">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/signup"
              className="rounded-btn navbar-sign-up-btn bg-white text-alphaGreen px-5 py-2 whitespace-nowrap"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="rounded-btn navbar-login-btn  bg-alphaGreen px-8 py-2 rounded-full hover:bg-alphaGreen-600"
            >
              Log In
            </Link>
          </div>
          <span className="md:hidden breadcrumb" onClick={toggleMenu}>
            {isOpen ? "✖️" : "☰"}
          </span>
        </div>
        {isOpen && (
          <div className="md:hidden p-1">
            <Link
              to="/signup"
              className="mobile-navbar-link block text-white px-3 py-2 rounded"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="mobile-navbar-link block text-white px-3 py-2 rounded"
            >
              Log In
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
