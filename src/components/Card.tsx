import React from "react";

const Card: React.FC = () => {
  // Data untuk card (gambar dan teks)
  const cardsData = [
    {
      id: 1,
      image: "/img/dua.jpeg",
      title: "Website Operational-app 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit quis fuga.",
    },
    {
      id: 2,
      image: "/img/dua.jpeg",
      title: "Website Operational-app 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit quis fuga.",
    },
    {
      id: 3,
      image: "/img/dua.jpeg",
      title: "Website Operational-app 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit quis fuga.",
    },
    {
      id: 4,
      image: "/img/dua.jpeg",
      title: "Website Operational-app 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit quis fuga.",
    },
  ];

  return (
    <div className="bg-blue-50 text-gray-800 py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Website Operational-app
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit
          quis fuga.
        </p>
      </div>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-72 md:w-64 lg:w-72 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={`Image for ${card.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="py-8 px-4">
              <h3 className="font-semibold text-dark mb-3 text-xl hover:text-primary truncate">
                {card.title}
              </h3>
              <p className="font-medium text-base text-secondary mb-6">
                {card.description}
              </p>
              <a
                href="#"
                className="font-medium text-sm bg-blue-500 py-2 px-4 text-white rounded-lg hover:opacity-80"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
