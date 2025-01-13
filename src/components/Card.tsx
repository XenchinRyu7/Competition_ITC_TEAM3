import React, { useEffect } from "react";
import { useService } from "../hooks/useService";
import { Service } from "../models/Service";

const Card: React.FC = () => {
  const { services, loading, error, getAllService } = useService();
  const limitedService = services?.slice(0, 4);

  useEffect(() => {
    getAllService();
  }, []);
  return (
    <div className="bg-blue-50 text-gray-800 py-10 px-4 lg:px-18">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Example Service
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit
          quis fuga.
        </p>
      </div>

      {/* Loading dan Error */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {limitedService?.map((item: Service) => (
          <div
            key={item.id}
            className="w-full sm:w-72 md:w-64 lg:w-72 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image_url_full} // Ganti dengan properti gambar jika tersedia
              alt={`Image for ${item.title}`}
              className="w-full h-48 object-cover"
            />  
            <div className="py-8 px-4">
              <h3 className="font-semibold text-dark mb-3 text-xl hover:text-primary truncate">
                {item.title}
              </h3>
              <p className="font-normal text-base text-zinc-800 mb-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Jika tidak ada data */}
      {!loading && !error && services?.length === 0 && (
        <p className="text-center text-gray-600">No services available.</p>
      )}
    </div>
  );
};

export default Card;
