import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-100 hover:text-blue-50 transition"
        >
          E-Lib
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4 md:space-x-6">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-blue-100 hover:bg-blue-500 hover:text-blue-50 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/ai-generate"
            className="px-3 py-2 rounded-md text-blue-100 hover:bg-blue-500 hover:text-blue-50 transition font-medium"
          >
            AI Generate
          </Link>
          <Link
            to="/recommender"
            className="px-3 py-2 rounded-md text-blue-100 hover:bg-blue-500 hover:text-blue-50 transition font-medium"
          >
            Recommender
          </Link>
          <Link
            to="/books"
            className="px-3 py-2 rounded-md text-blue-100 hover:bg-blue-500 hover:text-blue-50 transition font-medium"
          >
            Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
