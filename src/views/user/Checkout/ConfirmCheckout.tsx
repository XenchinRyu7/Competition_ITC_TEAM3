import React from "react";

const ConfirmStep: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
      {/* Illustration */}
      <div className="text-center mb-8">
        <img
          src="https://via.placeholder.com/200x200"
          alt="Purchase Illustration"
          className="mx-auto"
        />
        <h1 className="text-2xl font-bold text-gray-800">Pay Now 🎉</h1>
        <p className="text-gray-500">
          You can choose all method payment with midtrans
        </p>
      </div>

      {/* Order Details */}
      <div className=" p-6 w-full">
        {/* Order Summary */}
        <div className="grid grid-cols-2 gap-4 border-b pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">📅</span>
              <p className="font-medium text-gray-700">Date</p>
            </div>
            <p className="text-gray-600">27/04/2022</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">👤</span>
              <p className="font-medium text-gray-700">Customer</p>
            </div>
            <p className="text-gray-600">John Miller</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">💳</span>
              <p className="font-medium text-gray-700">Payment Method</p>
            </div>
            <p className="text-gray-600">VISA</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">🔢</span>
              <p className="font-medium text-gray-700">Order Number</p>
            </div>
            <p className="text-gray-600">586789963</p>
          </div>
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-indigo-500">💵</span>
              <p className="font-medium text-gray-700">Total</p>
            </div>
            <p className="text-xl font-bold text-gray-800">$273</p>
          </div>
        </div>
      </div>

      {/* Continue Shopping Button */}
      <button className="mt-8 bg-primary text-white py-2 px-6 rounded-lg">
        Pay With Midtrans
      </button>
    </div>
  );
};

export default ConfirmStep;
