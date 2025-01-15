import { useOrderContext } from "../../../context/OrderContext";
import React from "react";

const RowTransaction = () => {
  const { orders, getAllOrders } = useOrderContext();

  React.useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4 text-center">
                No
              </th>
              <th scope="col" className="p-4 text-center">
                Status
              </th>
              <th scope="col" className="p-4 text-center">
                Nama Service
              </th>
              <th scope="col" className="p-4 text-center">
                Price
              </th>
              <th scope="col" className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 text-center dark:text-white"
                >
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-center">{order.status}</td>
                <td className="px-4 py-3 text-center">
                  {order.service?.title}
                </td>
                <td className="px-4 py-3 text-center">
                  Rp {order.service?.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RowTransaction;
