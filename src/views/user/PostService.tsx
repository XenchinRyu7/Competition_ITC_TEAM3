import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import TextField from "../../components/Forms/TextField/TextField";
import TextArea from "../../components/Forms/TextArea/TextArea";
import { useServiceContext } from "../../context/ServiceContext";
import SelectCategory from "../../components/Forms/SelectGroup/SelectCategory";
import { useNotification } from "../../hooks/useNotification";
import { useNavigate } from "react-router-dom";

const PostService: React.FC = () => {
  const { createNewService, success, error, getAllServiceByUser, loading } =
    useServiceContext();
  const { showAlert } = useNotification();
  const navigate = useNavigate();

  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const maxFiles = 1;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedFiles((prevFiles) =>
        [...prevFiles, ...filesArray].slice(0, maxFiles)
      );
    }
  };

  const handleSubmit = async () => {
    if (!categoryId || categoryId === 0) {
      showAlert("Please select a valid category.", "warning");
      return;
    }

    if (!serviceName.trim() || !servicePrice.trim() || !description.trim()) {
      showAlert("All fields must be filled out.", "warning");
      return;
    }

    if (uploadedFiles.length === 0) {
      showAlert("Please upload at least one image.", "warning");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", serviceName);
      formData.append("price", servicePrice);
      formData.append("description", description);
      formData.append("category_id", categoryId.toString());
      uploadedFiles.forEach((file) => formData.append("image_url", file));

      console.log("Submitting new service with the following data:", {
        title: serviceName,
        price: servicePrice,
        description,
        categoryId,
        uploadedFiles,
      });

      await createNewService(formData);

      const waitForLoading = () =>
        new Promise<void>((resolve) => {
          const interval = setInterval(() => {
            if (!loading) {
              clearInterval(interval);
              resolve();
            }
          }, 100);
        });
      await waitForLoading();

      if (success) {
        showAlert(success, "success");
        navigate("/user/service");
        getAllServiceByUser();
      } else {
        throw new Error("Service creation did not complete successfully.");
      }
    } catch (err) {
      const errorMessage =
        error ||
        (err instanceof Error ? err.message : "An unexpected error occurred.");
      showAlert(errorMessage, "error");
      console.error("Error creating service:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-20">
      <div className="flex items-center mb-4">
        <FaArrowLeft className="mr-2" />
        <h1 className="text-xl font-bold">Post Service</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 shadow rounded-lg p-4">
        <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="bg-blue-100 text-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-2">
              <FaUpload className="w-8 h-8" />
            </div>
            <p className="text-blue-500 font-semibold mb-2">
              Click to choose file or drag and drop.
            </p>
            <p className="text-sm text-gray-400">
              Your ideas will be private until you publish them.
            </p>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            accept=".jpg,.png,.mp4"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Nama Jasa
            </label>
            <TextField
              type="text"
              placeholder="Enter service name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Harga
            </label>
            <TextField
              type="number"
              placeholder="Enter Price"
              value={servicePrice}
              onChange={(e) => setServicePrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <TextArea
              rows={4}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Kategori
            </label>
            <SelectCategory
              value={categoryId ?? 0}
              onChange={(e) => {
                const numericValue = Number(e.target.value);
                console.log("Selected Category ID (before set):", numericValue);
                setCategoryId(numericValue);
                console.log("Category ID state (after set):", numericValue);
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-2">
          {uploadedFiles.length}/{maxFiles} images uploaded
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-lg"
            >
              <img
                src={URL.createObjectURL(file)}
                alt="image uploaded"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default PostService;
