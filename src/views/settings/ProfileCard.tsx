import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm bg-white shadow rounded-lg p-4">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <button className="mt-2 text-sm text-blue-500 underline">Edit</button>
        <h3 className="mt-4 text-lg font-bold">Jay Rutherford</h3>
        <p className="text-sm text-gray-500">Professional title</p>
        <p className="text-center mt-4 text-sm text-gray-400">
          Incididunt dolore ut aliquip culpa id cupidatat mollit dolore sint esse non
        </p>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-500">Profile link</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value="https://www.profilelink.com"
            className="w-full text-sm border border-gray-300 rounded-lg p-2"
          />
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 13V6a1 1 0 011-1h11a1 1 0 011 1v7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
