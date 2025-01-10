import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeSwitcher from "./Header/DarkModeSwitcher";
import DropdownNotification from "./Header/DropdownNotification";
import DropdownMessage from "./Header/DropdownMessage";
import DropdownUser from "./Header/DropdownUser";
import { useAuth } from "../hooks/useAuth"; // Import useAuth hook

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Ambil status autentikasi
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="top-0 left-0 w-full z-50 py-4 px-6 sm:px-8 shadow-md bg-white">
        <div className="flex items-center justify-between lg:px-10">
          <div className="text-slate-900 font-bold text-xl sm:text-2xl">
            SkilBridge
          </div>
          {/* Tombol Hamburger */}
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
                {/* Menampilkan fitur jika sudah login */}
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
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:bg-blue-600">
              <Link to="/auth/signin" className="text-primary">
                Sign-in
              </Link>
            </button>
            <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base hover:bg-blue-600">
              Sign-up
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
