import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import TextField from "../../components/Forms/TextField/TextField";
import TextArea from "../../components/Forms/TextArea/TextArea";
import MultiSelect from "../../components/Forms/MultiSelect";
import SelectCountry from "../../components/Forms/SelectGroup/SelectCountry";

const PostService: React.FC = () => {
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
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
            <TextField type="text" placeholder="Enter service name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <TextArea rows={4} placeholder="Enter description" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Kategori
            </label>
            <MultiSelect id="multiSelect" />
            <p className="text-sm text-gray-400">
              Kategori bisa memilih beberapa.
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Lokasi
            </label>
            <SelectCountry />
            <p className="text-sm text-gray-400">
              Bisa memilih beberapa kota terdekat.
            </p>
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
                alt={`Preview ${index}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button className="px-4 py-2 bg-gray-200 rounded-lg font-medium hover:bg-gray-300">
          Preview
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
          Publish
        </button>
      </div>
    </div>
  );
};

export default PostService;
