import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="top-0 left-0 w-full z-50 py-4 px-6 sm:px-8 shadow-md bg-white">
        <div className="flex items-center justify-between lg:px-10">
          <div className="text-slate-900 font-bold text-xl sm:text-2xl">
            SkilBridge
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
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
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex space-x-4">
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:bg-blue-600">
              <Link to="/auth/signin" className="text-primary">
                Sign-in
              </Link>
            </button>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:bg-blue-600">
              Sign-up
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-2 sm:hidden">
            <a href="#home" className="text-black text-sm">
              Home
            </a>
            <a href="#features" className="text-black text-sm">
              Features
            </a>
            <a href="#about" className="text-black text-sm">
              About
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
