import React, { useState, useEffect } from "react";
import { useCategory } from "../../hooks/useCategory";
import TextField from "../Forms/TextField/TextField";

interface EditModalProps {
  id: number;
  categoryBefore: string;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  onClose,
  id,
  categoryBefore,
}) => {
  const { loading, error, updateCategory } = useCategory();
  const [categoryName, setCategoryName] = useState<string>("");

  // Set initial category name when the modal opens
  useEffect(() => {
    setCategoryName(categoryBefore);
  }, [categoryBefore]);

  const handleSave = async () => {
    if (categoryName.trim() === "") {
      alert("Category name cannot be empty!");
      return;
    }

    await updateCategory(id, categoryName);
    if (!error) {
      alert("Category updated successfully!");
      onClose();
    }
  };

  return (
    <div
      id="edit-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
      aria-hidden={false}
    >
      <div className="relative w-full h-auto max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Edit Category
            </h3>

            <div>
              <TextField
                type="text"
                placeholder="Enter the new category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required={true}
              />
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-500">
                {error || "Failed to update category. Try again."}
              </p>
            )}

            <button
              type="button"
              className={`mt-5 text-white ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-900"
              } focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
