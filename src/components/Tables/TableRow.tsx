import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Drawer } from "flowbite";
import EditModal from "../modal/EditModal";
import DeleteModal from "../modal/DeleteModal";
import PreviewDrawer from "../modal/PreviewDrawer";

const TableRow = () => {
  const editModalRef = useRef<HTMLDivElement | null>(null);
  const deleteModalRef = useRef<HTMLDivElement | null>(null);
  const previewModalRef = useRef<HTMLDivElement | null>(null);
  const [drawerInstance, setDrawerInstance] = useState<Drawer | null>(null);

  useEffect(() => {
    if (editModalRef.current) {
      const instance = new Drawer(editModalRef.current);
      setDrawerInstance(instance);
    }
  }, []);

  const openModal = (modalType: "edit" | "delete" | "preview") => {
    if (modalType === "edit" && editModalRef.current) {
      const drawerElement = editModalRef.current;
      drawerElement.classList.remove("hidden");
      drawerInstance?.show();
    } else if (modalType === "delete" && deleteModalRef.current) {
      deleteModalRef.current.classList.remove("hidden");
    } else if (modalType === "preview" && previewModalRef.current) {
      previewModalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    if (drawerInstance && editModalRef.current) {
      drawerInstance.hide();
    }
    if (deleteModalRef.current) {
      deleteModalRef.current.classList.add("hidden");
    }
    if (previewModalRef.current) {
      previewModalRef.current.classList.add("hidden");
    }
    if (editModalRef.current) {
      editModalRef.current.classList.add("hidden");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="p-4 text-center">
              No
            </th>
            <th scope="col" className="p-4 text-center">
              Name
            </th>
            <th scope="col" className="p-4 text-center">
              Owner
            </th>
            <th scope="col" className="p-4 text-center">
              Category
            </th>
            <th scope="col" className="p-4 text-center">
              Price
            </th>
            <th scope="col" className="p-4 text-center">
              Status
            </th>
            <th scope="col" className="p-4 text-center">
              Rating
            </th>
            <th scope="col" className="p-4 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="p-4 w-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  onClick={(e) => e.stopPropagation()}
                  className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center mr-3">1</div>
            </th>
            <th
              scope="row"
              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center mr-3">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png"
                  alt="iMac Front Image"
                  className="h-8 w-auto mr-3"
                />
                Service AC
              </div>
            </th>
            <td className="px-4 py-3">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                Saeful Rohman
              </span>
            </td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="flex items-center">
                Service Peralatan Elektronik
              </div>
            </td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              180,000
            </td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Standby
            </td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="flex items-center">
                <span className="text-gray-500 dark:text-gray-400 ml-1">
                  5.0
                </span>
              </div>
            </td>
            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => openModal("edit")}
                  className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 dark:text-white border border-primary rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <FaEdit />
                  Edit
                </button>
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
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Drawer Modal */}
      <div
        ref={editModalRef}
        id="drawer-update-product"
        className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50 hidden"
        tabIndex={-1}
        aria-labelledby="drawer-update-product-label"
      >
        <EditModal onClose={closeModal} />
      </div>

      {/* Delete Modal */}
      <div
        ref={deleteModalRef}
        id="delete-modal"
        className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50 hidden"
        tabIndex={-1}
        aria-labelledby="delete-modal-label"
      >
        <DeleteModal onClose={closeModal} />
      </div>
      <div
        ref={previewModalRef}
        id="preview-modal"
        className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50 hidden"
        tabIndex={-1}
        aria-labelledby="preview-modal-label"
      >
        <PreviewDrawer onClose={closeModal} />
      </div>
    </div>
  );
};

export default TableRow;
