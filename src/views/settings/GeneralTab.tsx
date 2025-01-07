import React from "react";

const GeneralTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium">Profile</h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Full name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Username</label>
            <input
              type="text"
              placeholder="Your username"
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Profession</label>
            <select className="w-full border-gray-300 rounded-lg p-2">
              <option>Select your title</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Location</label>
            <select className="w-full border-gray-300 rounded-lg p-2">
              <option>Select your location</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-500">Bio</label>
          <textarea
            placeholder="Input text"
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium">Account</h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Email</label>
            <input
              type="email"
              placeholder="example.email@gmail.com"
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Save information
        </button>
      </div>
    </div>
  );
};

export default GeneralTab;
