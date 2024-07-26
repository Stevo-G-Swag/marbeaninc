import React, { useState } from 'react';

const Agent = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
    console.log(`Moving to step ${step + 1}`);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <p>This is the content for step 1.</p>;
      case 2:
        return <p>This is the content for step 2.</p>;
      case 3:
        return <p>This is the content for step 3.</p>;
      // Add more cases as needed
      default:
        console.error(`Unknown step: ${step}`);
        return <p>Unknown step</p>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Agentic Framework</h1>
      <p className="mb-8">Step {step}</p>
      <div className="bg-gray-200 p-4 rounded-md">{renderStepContent()}</div>
      <button
        onClick={handleNextStep}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Next Step
      </button>
    </div>
  );
};

export default Agent;
