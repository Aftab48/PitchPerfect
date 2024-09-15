const Show = () => {
  return (
    <div className="bg-green-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Text Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <p className="text-lg font-semibold">
              Whether it’s the elegance of{" "}
              <span className="text-red-600">Test matches</span> or the
              adrenaline of <span className="text-red-600">T20s</span>, we’ve
              designed an experience that captures the essence of the game.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end p-4">
            <img
              src="/assets/show-1.png"
              alt="Cricket Player"
              className="rounded-lg w-100 h-100 object-cover"
            />
          </div>
        </div>

        {/* Middle Image Section */}
        <div className="flex justify-center p-4">
          <img
            src="/assets/show-2.png"
            alt="Cricket Match"
            className="rounded-lg  w-100 h-100 object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 my-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700">
            Register for upcoming matches
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700">
            Explore Interactive Features
          </button>
        </div>

        {/* Bottom Image Section */}
        <div className="flex justify-center p-4">
          <img
            src="/assets/show-3.png"
            alt="Cricket Action"
            className="rounded-lg w-100 h-100 object-cover"
          />
        </div>

        {/* Bottom Text Section */}
        <div className="text-center my-6">
          <h1 className="text-5xl font-bold text-blue-800">
            DIVE INTO{" "}
            <span className="text-white bg-blue-600 p-2">CRICKET ACTION!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Show;
