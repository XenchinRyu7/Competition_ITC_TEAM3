import React from "react";
import { FaSearch } from "react-icons/fa";
import RowTransaction from "./RowTransaction";

const TableTransactions: React.FC = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 antialiased">
        <div className="mx-auto max-w-screen-2xl">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="flex-1 flex items-center space-x-2"></div>
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
                      placeholder="Search User"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </form>
              </div>
            </div>
            <RowTransaction />
          </div>
        </div>
      </section>
    </>
  );
};

export default TableTransactions;
