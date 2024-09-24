import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      age: "",
      gender: "",
      phoneNumber: "",
      email: "",
      previousInjuries: "",
    },
    cricketInfo: {
      teamName: "",
      numberOfPlayers: "",
      experience: "",
      preferredFormat: "",
      homeGroundLocation: "",
    },
    additionalInfo: {
      teamAchievements: "",
      playerPositions: "",
      teamGoals: "",
      socialMediaLinks: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (step === 1) {
        return {
          ...prev,
          personalInfo: { ...prev.personalInfo, [name]: value },
        };
      } else if (step === 2) {
        return {
          ...prev,
          cricketInfo: { ...prev.cricketInfo, [name]: value },
        };
      } else if (step === 3) {
        return {
          ...prev,
          additionalInfo: { ...prev.additionalInfo, [name]: value },
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true); // Set submission status
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

  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-4 my-64 shadow-md rounded-lg bg-gradient-to-r from-blue-500/80 to-blue-700/90">
      {isSubmitted ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="submission"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl font-bold mb-4">
                Thank you, Form submitted!
              </h2>

              <div className="animate-pulse mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <button
                onClick={goToHome}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                Go to Home
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="step-1 text-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    Step 1: Personal Information
                  </h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.personalInfo.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-300 rounded-lg mb-4"
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.personalInfo.age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <div className="mb-4 text-white-800">
                    <p className="mb-2">Gender:</p>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={formData.personalInfo.gender === "Male"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={formData.personalInfo.gender === "Female"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="Other"
                        checked={formData.personalInfo.gender === "Other"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="other">Other</label>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.personalInfo.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.personalInfo.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <div className="mb-4 text-white-800">
                    <p className="mb-2">Any previous injuries?</p>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="injuriesYes"
                        name="previousInjuries"
                        value="Yes"
                        checked={
                          formData.personalInfo.previousInjuries === "Yes"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="injuriesYes">Yes</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="injuriesNo"
                        name="previousInjuries"
                        value="No"
                        checked={
                          formData.personalInfo.previousInjuries === "No"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="injuriesNo">No</label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="step-2 text-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    Step 2: Cricket Information
                  </h2>
                  <input
                    type="text"
                    name="teamName"
                    placeholder="Enter your team name"
                    value={formData.cricketInfo.teamName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <input
                    type="number"
                    name="numberOfPlayers"
                    placeholder="Number of players"
                    value={formData.cricketInfo.numberOfPlayers}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <input
                    type="number"
                    name="experience"
                    placeholder="Enter experience (in years)"
                    value={formData.cricketInfo.experience}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <div className="mb-4 text-white-800">
                    <p className="mb-2">Preferred playing format:</p>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="odi"
                        name="preferredFormat"
                        value="ODIs"
                        checked={
                          formData.cricketInfo.preferredFormat === "ODIs"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="odi">ODIs</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="t20"
                        name="preferredFormat"
                        value="T20s"
                        checked={
                          formData.cricketInfo.preferredFormat === "T20s"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="t20">T20s</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="test"
                        name="preferredFormat"
                        value="Test Matches"
                        checked={
                          formData.cricketInfo.preferredFormat ===
                          "Test Matches"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="test">Test Matches</label>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="homeGroundLocation"
                    placeholder="Home ground location"
                    value={formData.cricketInfo.homeGroundLocation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="step-3 text-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    Step 3: Additional Information
                  </h2>
                  <textarea
                    name="teamAchievements"
                    placeholder="Enter your team achievements"
                    value={formData.additionalInfo.teamAchievements}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <textarea
                    name="playerPositions"
                    placeholder="Player positions"
                    value={formData.additionalInfo.playerPositions}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <textarea
                    name="teamGoals"
                    placeholder="Team goals"
                    value={formData.additionalInfo.teamGoals}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <input
                    type="text"
                    name="socialMediaLinks"
                    placeholder="Social media links"
                    value={formData.additionalInfo.socialMediaLinks}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-green-300 w-full mx-2 text-black py-2 px-4 rounded-lg hover:bg-green-400 transition-all"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="bg-green-500 w-full mx-2 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-500 w-full mx-2 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
