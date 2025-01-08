import React from "react";

const SummaryStep: React.FC = () => {
  return (
    <div className="md:flex flex-row">
      <div className="mt-4 md:w-1/3">
        <img
          src="https://via.placeholder.com/150"
          alt="Item"
          className="w-32 h-32 rounded-md"
        />
        <div className="flex justify-between items-center ">
          <div>
            <p className="font-medium mr-4">Service AC</p>
            <p className="text-gray-500">Saeful</p>
          </div>
          <p className="text-lg font-semibold">180000</p>
        </div>
      </div>
      <div className="md:w-2/3 pt-4">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>180000</p>
        </div>
        <div className="flex justify-between">
          <p>Fee:</p>
          <p>5000</p>
        </div>
        <div className="flex justify-between font-semibold border-t-2 text-lg mt-2">
          <p>Total:</p>
          <p>185000</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;
