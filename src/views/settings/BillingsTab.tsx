import React from "react";
import TextField from "../../components/Forms/TextField/TextField";
import SelectBank from "../../components/Forms/SelectGroup/SelectBank";

const BillingsTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium dark:text-white">Billing Information</h2>
        <div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-500 mt-4 dark:text-white">
              Bank Name
            </label>
            <SelectBank />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-500 dark:text-white">
            Account Number
          </label>
          <TextField type="number" placeholder="Enter your account number" />
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

export default BillingsTab;
