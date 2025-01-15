import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { useOrderContext } from "../../context/OrderContext";
import React from "react";
import { useNotification } from "../../hooks/useNotification";

const Orders: React.FC = () => {
  const { orders, loading, error, fetchAllOrders, changeStatus, success } =
    useOrderContext();

  const { showAlert } = useNotification();

  const handleMarkAsDone = (id: number) => {
    changeStatus(id, "done");
    if (success) {
      showAlert(success, "success");
    }
    if (error) {
      showAlert(error, "error");
    }
  };

  React.useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="flex justify-center bg-slate-100 items-center px-4 py-6 dark:bg-gray-900 py-20 md:py-10">
      <div className="mt-4 p-6 rounded-lg lg:mt-24 lg:mb-10 shadow-md max-w-4xl w-full bg-white dark:bg-gray-800">
        <div className="flex items-center mb-6">
          <FaArrowLeft className="mr-2 text-blue-700" />
          <h1 className="text-xl font-bold text-zinc-800 dark:text-white">
            Your Orders
          </h1>
        </div>

        {loading && (
          <p className="text-center text-blue-600">Loading orders...</p>
        )}

        <div className="space-y-6">
          {!loading && !error && orders.length > 0
            ? orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col sm:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden dark:bg-boxdark"
                >
                  <div className="w-full sm:w-1/3">
                    <img
                      src={order.service?.image_url_full}
                      alt={order.service?.title || "Service"}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>

                  <div className="w-full sm:w-2/3 bg-gray-100 text-zinc-950 p-4 flex flex-col justify-between dark:bg-boxdark relative">
                    <div>
                      <p className="text-sm text-blue-600 font-medium dark:text-white">
                        status : {order.status}
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold mt-2 dark:text-white">
                        {order.service?.title || "Unknown Service"}
                      </h3>
                      <p className="text-sm mt-2 text-gray-700 dark:text-white">
                        {order.user?.name || "No user information"}
                      </p>
                      <p className="text-base md:text-lg font-bold mt-4 dark:text-white">
                        Service Date: {order.order_date}
                      </p>
                      <p className="text-base md:text-lg font-bold mt-4 dark:text-white">
                        Whatsapp Number: {order.user?.phone_number}
                      </p>
                    </div>

                    <div className="flex items-center justify-end space-x-3 mt-4">
                      {order.status !== "done" && (
                        <button
                          onClick={() => handleMarkAsDone(order.id)}
                          className="flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-md transition"
                        >
                          <FaCheck className="mr-2" />
                          Mark as Done
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            : !loading &&
              !error && (
                <p className="text-center text-gray-600">No orders found.</p>
              )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
