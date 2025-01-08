import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; // Heroicons

const Detail: React.FC = () => {
  const navigate = useNavigate();

  // Order Item Data
  const orderItems = [
    {
      title: "Guitar Tuning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp45.000",
      image: "img/background_header.png",
    },
    {
      title: "Resume Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp60.000",
      image: "img/background_header.png",
    },
    {
      title: "Carpentry Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp100.000",
      image: "img/background_header.png",
    },
    {
      title: "Carpentry Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp100.000",
      image: "img/background_header.png",
    },
    {
      title: "Carpentry Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp100.000",
      image: "img/background_header.png",
    },
    {
      title: "Carpentry Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp100.000",
      image: "img/background_header.png",
    },
    {
      title: "Carpentry Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp100.000",
      image: "img/background_header.png",
    },
  ];

  return (
    <>
      <div className="w-full backdrop-blur fixed bg-transparent py-4 px-6">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </button>
      </div>
      <div className="bg-zinc-300 min-h-screen p-4 flex justify-center items-center">
        <div className="bg-gray-100 mt-16 p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-zinc-700">
            Your Orders
          </h2>

          {/* Order Cards */}
          <div className="space-y-6">
            {orderItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row w-full bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="sm:w-1/2">
                  <img
                    src={item.image}
                    alt="Order Image"
                    className="w-full h-60 object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="sm:w-1/2 bg-gray-100 text-zinc-950 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm">In Progress</p>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm mt-2">{item.description}</p>
                    <p className="text-base md:text-lg font-bold mt-4">
                      {item.price}
                    </p>
                  </div>
                  <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
