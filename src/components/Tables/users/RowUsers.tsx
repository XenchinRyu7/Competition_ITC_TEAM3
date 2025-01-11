import { useUser } from "../../../hooks/useUser";
import { useEffect, useRef, useState } from "react";
import { Drawer } from "flowbite";
import { FaTrash, FaEye } from "react-icons/fa";
import PreviewDrawer from "../../modal/PreviewDrawer";
import DeleteModal from "../../modal/DeleteModal";

const RowUsers = () => {
  const deleteModalRef = useRef<HTMLDivElement | null>(null);
  const previewModalRef = useRef<HTMLDivElement | null>(null);
  const [drawerInstance, setDrawerInstance] = useState<Drawer | null>(null);

  const { users, fetchUsers, loading, error } = useUser();

  useEffect(() => {
    fetchUsers();
    if (deleteModalRef.current) {
      const instance = new Drawer(deleteModalRef.current);
      setDrawerInstance(instance);
    }
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const openModal = (modalType: "delete" | "preview") => {
    if (modalType === "delete" && deleteModalRef.current) {
      const drawerElement = deleteModalRef.current;
      drawerElement.classList.remove("hidden");
      drawerInstance?.show();
    } else if (modalType === "preview" && previewModalRef.current) {
      previewModalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    if (drawerInstance && deleteModalRef.current) {
      drawerInstance.hide();
    }
    if (deleteModalRef.current) {
      deleteModalRef.current.classList.add("hidden");
    }
    if (previewModalRef.current) {
      previewModalRef.current.classList.add("hidden");
    }
  };

  return (
    <>
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
                Email
              </th>
              <th scope="col" className="p-4 text-center">
                Phone
              </th>
              <th scope="col" className="p-4 text-center">
                status
              </th>
              <th scope="col" className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.role === "user")
              .map((user, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-4 py-3 text-center">{user.name}</td>
                  <td className="px-4 py-3 text-center">{user.email}</td>
                  <td className="px-4 py-3 text-center">{user.phone_number}</td>
                  <td className="px-4 py-3 text-center">{user.status}</td>
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
    </>
  );
};

export default RowUsers;
