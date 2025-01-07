import React, { useState } from "react";

const PostService: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const maxFiles = 20;

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
      <h1 className="text-xl font-bold mb-4">Post Service</h1>
      <p className="text-sm text-gray-500 mb-4">
        You can add up to 20 images or videos.
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Upload Box */}
        <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="bg-blue-100 text-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21l3-3m-3 3l-3-3m6-6l3 3m0-3l-3-3"
                />
              </svg>
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

        {/* Form Fields */}
        <div className="flex-1">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Nama Jasa
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter your service name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter service description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Kategori
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300"
              placeholder="Choose tag"
            />
            <p className="text-sm text-gray-400">
              Kategori bisa memilih beberapa.
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Lokasi?
            </label>
            <select className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300">
              <option value="public">Public (Anyone on or off Moder)</option>
              <option value="private">Private</option>
            </select>
            <p className="text-sm text-gray-400">
              Bisa memilih beberapa kota terdekat.
            </p>
          </div>
        </div>
      </div>

      {/* File Preview */}
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

      {/* Action Buttons */}
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
