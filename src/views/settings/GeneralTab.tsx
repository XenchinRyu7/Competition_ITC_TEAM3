import React from "react";
import SelectGroupTwo from "../../components/Forms/SelectGroup/SelectCountry";
import TextField from "../../components/Forms/TextField/TextField";

const GeneralTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium">Profile</h2>
        <div>
          <label className="block text-sm font-medium text-gray-500 mt-4">
            Full name
          </label>
          <TextField type="text" placeholder="Enter your full name" />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Number Phone
            </label>
            <TextField type="text" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Location
            </label>
            <SelectGroupTwo />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium">Account</h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Email
            </label>
            <TextField type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Password
            </label>
            <TextField type="password" placeholder="Enter your password" />
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
