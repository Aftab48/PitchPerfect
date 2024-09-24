const Routine = () => {
  return (
    <section className="bg-gradient-to-r from-[#91F888] to-[#13420F] p-8 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-y-4 w-full max-w-6xl">
      
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-4xl md:text-7xl font-extrabold text-center text-[#098ADA]"
            style={{ WebkitTextStroke: "4px #FFF" }}
          >
            CHECK OUT <br /> MATCH ROUTINES
          </h1>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-extrabold text-2xl w-[75%] py-4 px-8 rounded-full">
            MATCH SCHEDULE
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/matchroutine.png"
            alt="Match Schedule"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

       
        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/pointtable.png"
            alt="Points Table"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-4xl md:text-7xl font-extrabold text-center text-white"
            style={{ WebkitTextStroke: "6px #098ADA" }}
          >
            & POINTS TABLE
          </h1>

          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-extrabold text-2xl w-[75%] py-4 px-8 rounded-full">
            VIEW SCORECARDS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Routine;
