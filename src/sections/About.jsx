import React from "react";

const About = () => {
  return (
    <section className="bg-cover bg-center bg-[url('/assets/bg-3.png')] h-screen flex items-center">
      <div className="max-w-2xl p-8 mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold text-[#91F888] mb-6">
          ABOUT US
        </h1>
        <p className="text-white text-lg md:text-3xl font-semibold mb-4">
          At <span className="text-[#E31414] font-bold">PitchPerfect</span>, our
          mission is to connect cricket lovers with the game they adore,
          providing insightful content, live match details, and exclusive
          features to keep you engaged. We pride ourselves on delivering
          accurate information, comprehensive statistics, and interactive
          elements that enhance your experience, making you feel like you're
          right in the stadium!
        </p>
        <div className="text-center">
          <button className="bg-[#E31414] text-white font-bold text-lg md:text-2xl px-6 py-3 rounded-full hover:bg-red-600 transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
