const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-blue-500 overflow-x-hidden">
      <div className="w-full md:w-2/5 z-5 relative">
        <img
          src="/assets/bg-hero.png"
          alt="Cricket Gear"
          className="h-full max-h-[100vh] w-full object-cover md:ml-auto"
        />
      </div>

      <div className="w-full md:w-[52%] z-20 md:mr-8 flex flex-col justify-center p-8 text-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-green-400">
          PITCHPERFECT
        </h1>

        <p className="mt-4 text-lg sm:text-2xl text-right md:text-left">
          Step into the world of cricket with <br />{" "}
          <span className="text-black font-semibold">PitchPerfect</span>, your{" "}
          <span className="text-black font-semibold">premier destination</span>
          <br /> for dynamic cricket tournaments <br /> across all formats.
        </p>

        <div className="mt-8 flex space-x-4 justify-center md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="/icons/fb.png"
              alt="fb"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="/icons/twitter.png"
              alt="twitter"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="/icons/yt.png"
              alt="yt"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="/icons/insta.png"
              alt="insta"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
