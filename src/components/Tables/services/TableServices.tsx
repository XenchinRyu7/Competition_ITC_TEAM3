import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Drawer } from "flowbite";
import CreateModal from "../../modal/CreateModal";
import RowServices from "./RowServies";
import { useService } from "../../../hooks/useService";

const TableServices: React.FC = () => {
  const createModalRef = useRef<HTMLDivElement | null>(null);
  const [drawerInstance, setDrawerInstance] = useState<Drawer | null>(null);

  const { services, getAllService } = useService();

  useEffect(() => {
    getAllService();
  }, []);

  useEffect(() => {
    if (createModalRef.current) {
      const instance = new Drawer(createModalRef.current);
      setDrawerInstance(instance);
    }
  }, []);

  const openModal = () => {
    if (createModalRef.current) {
      createModalRef.current.classList.remove("hidden");
      drawerInstance?.show();
    }
  };

  const closeModal = () => {
    if (drawerInstance && createModalRef.current) {
      drawerInstance.hide();
      createModalRef.current.classList.add("hidden");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 antialiased">
        <div className="mx-auto max-w-screen-2xl">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="flex-1 flex items-center space-x-2">
                <h5>
                  <span className="text-gray-500">All Services: </span>
                  <span className="dark:text-white">{services.length}</span>
                </h5>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaSearch />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      placeholder="Search for products"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={openModal}
                  className="flex items-center justify-center text-white dark:text-gray-900 bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <FaPlus />
                  Add product
                </button>
              </div>
            </div>
            <RowServices />
          </div>
        </div>
      </section>

      <div
        ref={createModalRef}
        id="create-modal"
        className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50 hidden"
        tabIndex={-1}
        aria-labelledby="preview-modal-label"
      >
        <CreateModal onClose={closeModal} />
      </div>
    </>
  );
};

export default TableServices;
