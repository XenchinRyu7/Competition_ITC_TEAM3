import React, { useState } from "react";


const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { image: "/img/dua.jpeg",},
    { image: "/img/dua.jpeg",},
    { image: "/img/dua.jpeg",},
    { image: "/img/dua.jpeg",},
    { image: "/img/dua.jpeg",}
  ]; // Array berisi objek dengan gambar lokal

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto text-center px-4 py-10">
      <h1 className="text-2xl font-bold mb-5">
        LOREM IPSUM IS A SIMPLY DUMMY TEXT OF THE PRINTING
      </h1>
      <div className="relative flex items-center">
        {/* Tombol Sebelah Kiri */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          {"<"}
        </button>

        {/* Wrapper Kartu */}
        <div className="flex overflow-hidden w-full px-5">
          <div
            className="flex transition-transform duration-500 space-x-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Geser tiap kartu lebih kecil
              width: `${cards.length * (100 / 3)}%`,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className="flex px-8 justify-center">
                <div className="w-60 h-80 border border-blue-300 rounded-lg flex items-center justify-center">
                  <img
                    src={card.image}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Sebelah Kanan */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
