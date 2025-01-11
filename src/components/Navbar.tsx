import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeSwitcher from "./Header/DarkModeSwitcher";
import DropdownNotification from "./Header/DropdownNotification";
import DropdownUser from "./Header/DropdownUser";
import { useAuth } from "../hooks/useAuth";
const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <>
      <header className="top-0 left-0 w-full z-50 py-4 px-6 sm:px-8 shadow-md fixed backdrop-blur ">
        <div className="flex items-center justify-between lg:px-10">
          <div className="text-white font-bold text-xl sm:text-2xl">
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
          <div className="hidden sm:flex space-x-2">
            {!isAuthenticated ? (
              <>
                <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:bg-blue-600">
                  <Link to="/auth/signin" className="text-primary">
                    Sign-in
                  </Link>
                </button>
                <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:bg-blue-600">
                  Sign-up
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3 2xsm:gap-7">
                <div className="block">
                  <button className="bg-transparent font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:text-black">
                    <Link to="/auth/signin" className="text-primary">
                      Browse
                    </Link>
                  </button>
                </div>
                <ul className="flex items-center gap-2 2xsm:gap-4">
                  <DarkModeSwitcher />
                  <DropdownNotification />
                </ul>
                <DropdownUser />
              </div>
            )}
          </div>
        </div>
        {/* Menu Responsif */}
        {menuOpen && !isAuthenticated && (
          <div className="sm:hidden flex flex-col items-center space-y-4">
            <button className="bg-blue-900 text-white font-medium px-8 py-2 rounded-full text-sm sm:text-base hover:bg-blue-950">
              <Link to="/auth/signin">Login</Link>
            </button>
            <button className="bg-blue-50 text-blue-500 font-medium px-6 py-2 rounded-full text-sm sm:text-base hover:bg-blue-900 hover:text-white">
              Register
            </button>
          </div>
        )}
        {/* Menu Responsif untuk yang sudah login */}
        {menuOpen && isAuthenticated && (
          <div className="sm:hidden flex flex-col items-center space-y-4">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              <DarkModeSwitcher />
              <DropdownNotification />
            </ul>
            <DropdownUser />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
