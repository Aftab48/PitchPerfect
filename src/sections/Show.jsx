const Show = () => {
  return (
    <div className="bg-[#91F888] p-8 relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Whether it’s the elegance of{" "}
              <span className="text-red-600">Test matches</span> or the
              adrenaline of <span className="text-red-600">T20s</span>, we’ve
              designed an experience that captures the essence of the game.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end p-4 relative md:right-[5vw] ">
            <img
              src="/assets/show-1.png"
              alt="Cricket Player"
              className="rounded-lg w-full max-w-[300px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start mt-8">
          <div className="flex flex-col gap-y-4 w-full md:w-1/4">
            <button className="bg-blue-600 bg-[url('/assets/button.png')] bg-contain text-white px-6 py-2 rounded-full shadow-lg font-bold hover:bg-blue-700 h-16 w-full">
              Register for upcoming matches
            </button>
            <button className="bg-blue-600 bg-[url('/assets/button.png')] bg-contain font-bold text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 h-16">
              Explore Interactive Features
            </button>
          </div>

          <div className="flex justify-center mt-6 md:mt-0 md:w-3/4">
            <img
              src="/assets/show-2.png"
              alt="Cricket Match"
              className="rounded-lg w-full max-w-[500px] object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <img
            src="/assets/show-3.png"
            alt="Cricket Action"
            className="rounded-lg w-full max-w-[500px] object-cover"
          />
        </div>

        <div className="text-left relative mt-16">
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold">
            DIVE INTO <br />
            <span className="p-2">CRICKET ACTION!</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
            <img
              src="/assets/blog.png"
              className="w-full sm:w-1/3 h-auto"
              alt="Blog"
            />
            <img
              src="/assets/show-1.png"
              className="w-full sm:w-1/3 h-auto"
              alt="Cricket Show"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
