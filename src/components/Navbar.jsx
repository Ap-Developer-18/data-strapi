import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Top Courses</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center absolute md:relative bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
            } md:translate-y-0`}
        >
          <li className="p-3 md:mx-4 hover:text-yellow-400">
            <a href="#">Home</a>
          </li>
          <li className="p-3 md:mx-4 hover:text-yellow-400">
            <a href="#">Courses</a>
          </li>
          <li className="p-3 md:mx-4 hover:text-yellow-400">
            <a href="#">About</a>
          </li>
          <li className="p-3 md:mx-4 hover:text-yellow-400">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;