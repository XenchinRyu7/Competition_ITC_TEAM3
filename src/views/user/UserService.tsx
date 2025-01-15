import { useEffect, useState } from "react";
import { FaArrowLeft, FaTrashAlt, FaEdit, FaEye, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useServiceContext } from "../../context/ServiceContext";
import { useNotificationContext } from "../../context/NotificationContext";

const UserService = () => {
  const navigate = useNavigate();

  const {
    services,
    loading,
    error,
    success,
    deleteExistingService,
    getAllServiceByUser,
  } = useServiceContext();

  const { showAlert } = useNotificationContext();

  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    getAllServiceByUser();
  }, []);

  useEffect(() => {
    setFilteredServices(services);
  }, [services]);

  const deleteService = async (id: number) => {
    try {
      await deleteExistingService(id);
      if (success) {
        showAlert(success, "success");
      }
      setFilteredServices((prevServices) =>
        prevServices.filter((service) => service.id !== id)
      );
    } catch (err) {
      if (error) {
        showAlert(error, "error");
      }
      console.error("Failed to delete service:", err);
    }
  };

  return (
    <div className="flex justify-center bg-slate-100 items-center px-4 py-20 md:py-10 dark:bg-gray-900">
      <div className="mt-4 p-6 rounded-lg lg:mt-24 lg:mb-10 shadow-md max-w-4xl w-full bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FaArrowLeft className="mr-2 text-blue-700" />
            <h1 className="text-xl font-bold text-zinc-800 dark:text-white">
              Your Services
            </h1>
          </div>
          <button
            onClick={() => navigate("/user/post-service")}
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition"
          >
            <FaPlus className="mr-2" />
            Add Service
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : filteredServices.length > 0 ? (
          <div className="space-y-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col sm:flex-row w-full bg-white shadow-md rounded-lg overflow-hidden dark:bg-boxdark cursor-pointer"
              >
                <div className="w-full sm:w-1/3">
                  <img
                    src={service.image_url_full}
                    alt={service.title || "Order Image"}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>

                <div className="w-full sm:w-2/3 bg-gray-100 text-zinc-950 p-4 flex flex-col justify-between dark:bg-boxdark">
                  <div>
                    <p className="text-sm text-blue-600 font-medium dark:text-white">
                      Category : {service.category.name || "Unknown"}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold mt-2 dark:text-white">
                      {service.title || "No Title"}
                    </h3>
                    <p className="text-sm mt-2 text-gray-700 dark:text-white">
                      {service.description || "No Description"}
                    </p>
                    <p className="text-base md:text-lg font-bold mt-4 dark:text-white">
                      {service.price ? `Rp ${service.price}` : "No Price"}
                    </p>
                  </div>

                  <div className="flex justify-end items-center mt-4">
                    <button className="bg-transparent hover:bg-blue-950 border p-2 rounded-md mr-5">
                      <Link to={`/user/detail/${service.id}`}>
                        <FaEye className="text-white text-lg" />
                      </Link>
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-950 text-white p-2 rounded-md transition mr-5">
                      <Link to={`/user/edit-service/${service.id}`}>
                        <FaEdit className="text-white text-lg" />
                      </Link>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteService(service.id);
                      }}
                      className="bg-red-700 hover:bg-red-800 text-white p-2 rounded-md transition"
                    >
                      <FaTrashAlt className="text-white text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default UserService;
