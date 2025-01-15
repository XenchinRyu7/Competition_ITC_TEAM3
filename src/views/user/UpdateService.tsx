import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import TextField from "../../components/Forms/TextField/TextField";
import TextArea from "../../components/Forms/TextArea/TextArea";
import { useServiceContext } from "../../context/ServiceContext";
import SelectCategory from "../../components/Forms/SelectGroup/SelectCategory";
import { useNotificationContext } from "../../context/NotificationContext";

const UpdateService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { showAlert } = useNotificationContext();
  const navigate = useNavigate();
  const {
    detailService,
    getServiceDetail,
    updateExistingService,
    updateServiceImage,
  } = useServiceContext();

  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<(string | File)[]>([]);
  const maxFiles = 1;

  useEffect(() => {
    if (id) {
      getServiceDetail(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (detailService) {
      setServiceName(detailService.title);
      setServicePrice(detailService?.price);
      setDescription(detailService.description);
      setCategoryId(detailService?.category.id);

      if (detailService.image_url_full) {
        setUploadedFiles([detailService.image_url_full]);
      }
    }
  }, [detailService]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedFiles(filesArray.slice(0, maxFiles));
    }
  };

  const handleSubmit = async () => {
    if (!categoryId || categoryId === 0) {
      showAlert("Please select a valid category.", "warning");
      return;
    }

    try {
      console.log("Updating service with the following details:", {
        id: Number(id),
        title: serviceName,
        price: servicePrice,
        description,
        category_id: categoryId,
      });

      await updateExistingService({
        id: Number(id),
        title: serviceName,
        price: servicePrice,
        description,
        category_id: categoryId,
      });

      if (uploadedFiles.length > 0 && typeof uploadedFiles[0] !== "string") {
        const formData = new FormData();
        uploadedFiles.forEach((file) => {
          if (typeof file !== "string") {
            formData.append("image_url", file);
          }
        });
        await updateServiceImage(Number(id), formData);

        const newImageUrl = URL.createObjectURL(uploadedFiles[0] as File);
        setUploadedFiles([newImageUrl]);
      }

      navigate("/user/service");
    } catch (error) {
      showAlert("Failed to update service.", "error");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-20">
      <div className="flex items-center mb-4">
        <FaArrowLeft className="mr-2" />
        <h1 className="text-xl font-bold">Update Service</h1>
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
            accept=".jpg,.png"
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
                console.log("Category ID selected in parent:", numericValue);
                setCategoryId(numericValue);
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
              {typeof file === "string" ? (
                <img
                  src={file}
                  alt="Previous uploaded"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded file"
                  className="object-cover w-full h-full rounded-lg"
                  onLoad={() => URL.revokeObjectURL(URL.createObjectURL(file))}
                />
              )}
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

export default UpdateService;
