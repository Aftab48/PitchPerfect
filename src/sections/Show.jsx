const Show = () => {
  return (
    <div className="bg-green-400 p-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Text Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <p className="text-3xl font-semibold">
              Whether it’s the elegance of{" "}
              <span className="text-red-600">Test matches</span> or the
              adrenaline of <span className="text-red-600">T20s</span>, we’ve
              designed an experience that captures the essence of the game.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end p-4 relative right-[5vw] ">
            <img
              src="/assets/show-1.png"
              alt="Cricket Player"
              className="rounded-lg w-100 h-100 object-cover"
            />
          </div>
        </div>
        <div className="flex">
          {/* Buttons */}
          <div className="flex flex-col gap-y-10 w-1/4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 h-16">
              Register for upcoming matches
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 h-16">
              Explore Interactive Features
            </button>
          </div>
          {/* Middle Image Section */}
          <div className="flex z-10 justify-center p-4 relative -right-[28vw] -top-[10vh]">
            <img
              src="/assets/show-2.png"
              alt="Cricket Match"
              className="rounded-lg  w-100 h-100 object-cover"
            />
          </div>
        </div>
        {/* Bottom Image Section */}
        <div className="flex justify-center p-4">
          <img
            src="/assets/show-3.png"
            alt="Cricket Action"
            className="rounded-lg w-100 h-100 object-cover relative -top-[20vh] z-20"
          />
        </div>

        {/* Bottom Text Section */}
        <div className="text-left relative -top-[50vh] z-30 text-gradient-to-r from-[#093754] from-10% to-[#FFFFFF] to-100%">
          <h1 className="text-8xl font-bold ">
            DIVE INTO <br />
            <span className=" p-2">CRICKET ACTION!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Show;
