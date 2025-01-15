import { useCategory } from "../../../hooks/useCategory";
import { useEffect, useRef, useState } from "react";
import { Drawer } from "flowbite";
import { FaTrash, FaEdit } from "react-icons/fa";
import EditModal from "../../modal/EditModal";
import DeleteModal from "../../modal/DeleteModal";

interface RowCategoryProps {
  onUpdate: number;
}

const RowCategory: React.FC<RowCategoryProps> = () => {
  const editModalRef = useRef<HTMLDivElement | null>(null);
  const deleteModalRef = useRef<HTMLDivElement | null>(null);
  const [drawerInstance, setDrawerInstance] = useState<Drawer | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const { categories, loading, error, getAllCategories } = useCategory();

  useEffect(() => {
    getAllCategories();
    if (editModalRef.current) {
      const instance = new Drawer(editModalRef.current);
      setDrawerInstance(instance);
    }
  }, []);

  const openModal = (
    modalType: "edit" | "delete",
    category: { id: number; name: string }
  ) => {
    setSelectedCategory(category);

    if (modalType === "edit" && editModalRef.current) {
      const drawerElement = editModalRef.current;
      drawerElement.classList.remove("hidden");
      drawerInstance?.show();
    } else if (modalType === "delete" && deleteModalRef.current) {
      deleteModalRef.current.classList.remove("hidden");
    }
  };

  const closeModal = () => {
    if (drawerInstance && editModalRef.current) {
      drawerInstance.hide();
    }
    if (deleteModalRef.current) {
      deleteModalRef.current.classList.add("hidden");
    }
    if (editModalRef.current) {
      editModalRef.current.classList.add("hidden");
    }
  };

  if (loading) return <p className="text-center">Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

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
                Category Name
              </th>
              <th scope="col" className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={category.id}
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
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {index + 1}
                </th>
                <td className="px-4 py-3 text-center">{category.name}</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center space-x-4 justify-center">
                    <button
                      type="button"
                      onClick={() => openModal("edit", category)}
                      className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 dark:text-white border border-primary rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 gap-2"
                    >
                      <FaEdit />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => openModal("delete", category)}
                      data-modal-target="delete-modal"
                      data-modal-toggle="delete-modal"
                      className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 gap-2"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        ref={editModalRef}
        id="drawer-update-product"
        className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50 hidden"
        tabIndex={-1}
        aria-labelledby="drawer-update-product-label"
      >
        {selectedCategory && (
          <EditModal
            onClose={closeModal}
            id={selectedCategory.id}
            categoryBefore={selectedCategory.name}
          />
        )}
      </div>

      <div
        ref={deleteModalRef}
        id="delete-modal"
        className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50 hidden"
        tabIndex={-1}
        aria-labelledby="delete-modal-label"
      >
        {selectedCategory && (
          <DeleteModal onClose={closeModal} id={selectedCategory.id} />
        )}
      </div>
    </>
  );
};

export default RowCategory;
