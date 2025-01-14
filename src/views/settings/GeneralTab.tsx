import React, { useState, useEffect } from "react";
import SelectGroupTwo from "../../components/Forms/SelectGroup/SelectCountry";
import TextField from "../../components/Forms/TextField/TextField";
import { useAuth } from "../../hooks/useAuth";

const GeneralTab: React.FC = () => {
  const { getUserData, user } = useAuth();

  // Tambahkan state untuk form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
  });

  // Update state dengan data user ketika user berubah
  useEffect(() => {
    getUserData();
    console.log(user?.name);
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone_number: user.phone_number || "",
        address: user.address || "",
      });
    }
  }, [user]);

  // Handle perubahan input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium dark:text-white">Profile</h2>
        <div className="flex flex-row gap-6 mt-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-500 mt-4 dark:text-white">
              Full name
            </label>
            <TextField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-500 mt-4 dark:text-white">
              Email
            </label>
            <TextField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-4 dark:text-white">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-500 dark:text-white">
              Number Phone
            </label>
            <TextField
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-500 dark:text-white">
              Location
            </label>
            <SelectGroupTwo value={formData.address} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium dark:text-white">Account</h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-white">
              Email
            </label>
            <TextField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-white">
              Password
            </label>
            <TextField
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end dark:text-white">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Save information
        </button>
      </div>
    </div>
  );
};

export default GeneralTab;
