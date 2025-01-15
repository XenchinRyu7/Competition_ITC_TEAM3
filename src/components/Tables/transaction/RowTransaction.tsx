import { useUser } from "../../../hooks/useUser";
import { useEffect, useRef, useState } from "react";
import { Drawer } from "flowbite";
import { FaTrash, FaEye } from "react-icons/fa";
import PreviewDrawer from "../../modal/PreviewDrawer";
import DeleteModal from "../../modal/DeleteModal";
import { useOrderContext } from "../../../context/OrderContext";
import React from "react";

const RowTransaction = () => {
  const deleteModalRef = useRef<HTMLDivElement | null>(null);
  const previewModalRef = useRef<HTMLDivElement | null>(null);
  const [drawerInstance, setDrawerInstance] = useState<Drawer | null>(null);

  useEffect(() => {
    if (deleteModalRef.current) {
      const instance = new Drawer(deleteModalRef.current);
      setDrawerInstance(instance);
    }
  }, []);

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
                <td className="px-4 py-3 text-center">{order.service.title}</td>
                <td className="px-4 py-3 text-center">
                  Rp {order.service.price.toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center space-x-4 justify-center">
                    <button
                      type="button"
                      onClick={() => openModal("preview")}
                      data-drawer-target="drawer-read-product-advanced"
                      data-drawer-show="drawer-read-product-advanced"
                      aria-controls="drawer-read-product-advanced"
                      className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 dark:text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <FaEye />
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => openModal("delete")}
                      data-modal-target="delete-modal"
                      data-modal-toggle="delete-modal"
                      className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      <FaTrash />
                      Banned
                    </button>
                  </div>
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
