import React, { useState } from "react";

interface ContentProps {
  contentHead: string; // Judul utama
  description: string; // Deskripsi
  idSection: string; // ID untuk elemen section
  textButton: string; // Teks pada tombol
  buttonLink: string; // URL tujuan tombol
  imageSrc?: string; // URL gambar (opsional)
}

const Navbar: React.FC<ContentProps> = ({
  contentHead,
  description,
  idSection,
  textButton,
  buttonLink,
  imageSrc,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed backdrop-blur top-0 left-0 w-full z-50 py-4 px-6 sm:px-8">
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
              Sign-in
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

      {/* Section */}
      <section
        id={idSection}
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/background_indonesia.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="lg:px-20 h-screen flex flex-col sm:flex-row justify-center items-center px-4 sm:px-8">
          <div className="w-full sm:w-1/2 text-center sm:text-left text-slate-900">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              {contentHead}
            </h1>
            <p className="text-sm sm:text-lg leading-relaxed mb-4 sm:mb-8 mt-2">
              {description}
            </p>
            <a
              href={buttonLink}
              className="inline-block text-sm sm:text-base font-semibold text-white bg-blue-500 py-3 px-6 sm:px-8 rounded-full hover:shadow-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
            >
              {textButton}
            </a>
          </div>
          {imageSrc && (
            <div className="hidden md:flex w-full sm:w-1/2  justify-center sm:justify-end">
              <img
                src={imageSrc}
                alt="E-Learning Illustration"
                className="w-full max-w-sm sm:max-w-md"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;
