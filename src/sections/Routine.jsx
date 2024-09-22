import React from "react";

const Routine = () => {
  return (
    <section className="bg-gradient-to-r from-[#91F888] to-[#13420F] p-8 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 w-full max-w-6xl">
        {/* First Section: Match Title and Button */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center">
            CHECK OUT <br /> MATCH ROUTINES
          </h1>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-full">
            MATCH SCHEDULE
          </button>
        </div>

        {/* Second Section: Match Schedule Image */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/matchroutine.png" // Replace with your actual schedule image
            alt="Match Schedule"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* Third Section: Points Table Image */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/pointtable.png" // Replace with your actual points table image
            alt="Points Table"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* Fourth Section: Points Table Title and Button */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center">
            & POINTS TABLE
          </h1>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-full">
            VIEW SCORECARDS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Routine;
