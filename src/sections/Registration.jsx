import React, { useState } from "react";

const SeamlessForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-[url('/assets/blog.png')] shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
   
        {step === 1 && (
          <div className="step-1">
            <h2 className="text-xl font-bold mb-4">Step 1: Your Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
          </div>
        )}

  
        {step === 2 && (
          <div className="step-2">
            <h2 className="text-xl font-bold mb-4">Step 2: Your Email</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
          </div>
        )}

        {step === 3 && (
          <div className="step-3">
            <h2 className="text-xl font-bold mb-4">Step 3: Your Message</h2>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border resize-none border-gray-300 rounded-lg mb-4"
            />
          </div>
        )}
       
        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SeamlessForm;
