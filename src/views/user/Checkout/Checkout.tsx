import React, { useState } from "react";
import ConfirmStep from "./ConfirmCheckout";
import CompleteStep from "./CompleteCheckout";
import SummaryStep from "./SummaryCheckout";

const steps = ["Summary", "Confirm", "Complete"];

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full ${
                index <= currentStep
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {index + 1}
            </div>
            <p
              className={`mt-2 text-sm ${
                index === currentStep ? "font-bold" : ""
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="border rounded-lg p-6 shadow-md bg-white">
        {currentStep === 0 && <SummaryStep />}
        {currentStep === 1 && <ConfirmStep />}
        {currentStep === 2 && <CompleteStep />}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          disabled={currentStep === 0}
          onClick={goToPreviousStep}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={goToNextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
