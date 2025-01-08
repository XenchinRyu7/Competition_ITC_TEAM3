import React, { useState } from "react";
import { useNavigate } from "react-router"; // Untuk navigasi antar halaman
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; // Heroicons

const PaginationComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  const navigate = useNavigate(); // Untuk navigasi ke halaman lain

  // Dummy data for items
  const items = [
    { id: 1, name: "Green Sweater", code: "SW1", stock: 200, price: 100 },
    {
      id: 2,
      name: "Blue T-Shirt",
      code: "TS1",
      stock: 20,
      price: 100,
      lowStock: true,
    },
    { id: 3, name: "White Casual Shirt", code: "WCS", stock: 200, price: 100 },
    { id: 4, name: "Pink Sweater", code: "SW2", stock: 200, price: 100 },
    { id: 5, name: "Jeans", code: "JNS", stock: 200, price: 100 },
    { id: 6, name: "Warm Winter Sweater", code: "SW3", stock: 200, price: 100 },
    {
      id: 7,
      name: "Red Winter Sweater",
      code: "SW4",
      stock: 15,
      price: 100,
      lowStock: true,
    },
    { id: 8, name: "Men Sweater", code: "SW5", stock: 200, price: 100 },
    { id: 9, name: "Men Jacket", code: "MJ1", stock: 150, price: 150 },
    { id: 10, name: "Casual Pants", code: "CP1", stock: 100, price: 120 },
  ];

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="w-full backdrop-blur fixed bg-transparent py-4 px-6">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to home
        </button>
      </div>

      <div className="bg-gray-100 min-h-screen pt-20 pb-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            New Services
          </h2>

          {/* Search and Popular Category */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-3 rounded-md border border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Sweaters", "T-Shirts", "Jackets", "Shoes"].map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-zinc-400 text-white rounded-md cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                >
                  <div className="w-full h-48 bg-gray-300 rounded-lg flex justify-center items-center mb-4">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-slate-200 w-[100px] text-center rounded-lg mt-2 bg-zinc-500">
                      Code: {item.code}
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      Rp{item.price}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  {item.lowStock && (
                    <span className="text-sm text-red-500 font-semibold bg-yellow-100 px-2 py-1 rounded-lg inline-block mt-2">
                      Low-Stock Alert
                    </span>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    On hand: {item.stock} items
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginationComponent;
