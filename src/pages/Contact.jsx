import React from "react";
import MaxWidthContainer from "../components/mmw";

const Contact = () => {
  return (
    <section className="bg-red-600 py-12  relative">
      <div
        className="absolute inset-0 bg-cover h-[50vh] bg-center opacity-50 top-20"
        style={{ backgroundImage: "url('/assets/image12.png')" }}
      ></div>

      <MaxWidthContainer>
        <h1 className="text-white text-center text-8xl font-bold mt-10">
          WE'RE HERE TO TALK
        </h1>
        <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#FFFFFFCF] p-8 rounded-lg text-center lg:text-left space-y-4 text-black shadow-md font-semibold text-4xl">
            <h2 className="text-3xl font-bold">Call us on :</h2>
            <p className="text-2xl">
              <i className="fas fa-phone-alt mr-2"></i> +1-234-567-8901
            </p>
            <p className="text-2xl">
              <i className="fas fa-phone-alt mr-2"></i> +1-936-062-4441
            </p>

            <h3 className="text-3xl font-semibold mt-6">Write to us at</h3>
            <a href="mailto:pitchperfect@gmail.com" className="underline">
              pitchperfect@gmail.com
            </a>

            <h3 className="text-3xl font-semibold mt-20">
              Join our Facebook community for daily updates:
            </h3>
            <a
              href="https://www.facebook.com/pitchperfect"
              className="underline text-xl"
            >
              facebook.com/pitchperfect
            </a>
          </div>

          <div className="bg-[#FFFFFFCF] p-8 rounded-lg text-black shadow-md">
            <h2 className="text-3xl font-bold mb-6">
              Fill in the contact form and we’ll get back to you within 48
              hours.
            </h2>
            <form className="space-y-4">
              <div className="">
                <label htmlFor="name" className="font-semibold">
                  Name :
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-2 border ml-20 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="">
                <label htmlFor="email" className="font-semibold">
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-2 border ml-20 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="font-semibold">
                  Describe the issue (in short) :
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="p-2 border resize-none border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Contact;
