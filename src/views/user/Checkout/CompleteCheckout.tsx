import React from "react";
import SuccessPayment from "../../../assets/images/transaction/success_payment.svg";
import { Service } from "../../../models/Service";
import { User } from "../../../models/user";
import { TransactionResult } from "../../../services/paymentService";

interface CompleteStepProps {
  detailService: Service;
  user: User;
  result: TransactionResult;
  selectedDate: string;
}

const CompleteStep: React.FC<CompleteStepProps> = ({
  user,
  detailService,
  result,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="text-left mb-8">
          <img
            src={SuccessPayment}
            alt="Purchase Illustration"
            className="mx-auto"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Thank you for your purchase! 🎉
          </h1>
        </div>

        <div className="p-6 w-full">
          <div className="grid grid-cols-2 gap-4 border-b pb-4 mb-4">
            <div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-500">📅</span>
                <p className="font-medium text-gray-700">Date</p>
              </div>
              <p className="text-gray-600">27/04/2022</p>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-500">👤</span>
                <p className="font-medium text-gray-700">Customer</p>
              </div>
              <p className="text-gray-600">John Miller</p>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-500">💳</span>
                <p className="font-medium text-gray-700">Payment Method</p>
              </div>
              <p className="text-gray-600">VISA</p>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-500">🔢</span>
                <p className="font-medium text-gray-700">Order Number</p>
              </div>
              <p className="text-gray-600">586789963</p>
            </div>
            <div className="col-span-2">
              <div className="flex items-start gap-2">
                <span className="text-indigo-500">💵</span>
                <p className="font-medium text-gray-700">Total</p>
              </div>
              <p className="text-xl font-bold text-gray-800">$273</p>
            </div>
          </div>
        </div>
        <button className="bg-primary text-white py-2 px-6 rounded-lg">
          Go To Whatsapp
        </button>
      </div>
    </div>
  );
};

export default CompleteStep;
