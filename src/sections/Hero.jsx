const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-500 overflow-x-hidden">
      <div className="md:w-2/5 z-5 relative">
        <img
          src="/assets/bg-hero.png"
          alt="Cricket Gear"
          className="h-full max-h-[100vh] ml-auto w-full object-cover"
          style={{ marginLeft: "40%" }}
        />
      </div>

      <div className="md:w-[52%] z-20 mr-8 flex flex-col justify-center p-8 text-white">
        <h1 className="text-2xl pr-16 sm:text-4xl mr-8 lg:mr-0 md:text-5xl lg:text-8xl font-extrabold text-green-400">
          PITCHPERFECT
        </h1>

        <p className="mt-4 text-2xl text-right">
          Step into the world of cricket with <br />{" "}
          <span className="text-black text-2xl font-semibold">
            PitchPerfect
          </span>
          , your{" "}
          <span className="text-black font-semibold">premier destination</span>
          <br /> for dynamic cricket tournaments <br /> across all formats.
        </p>

        <div className="mt-8 flex space-x-4 mr-8 justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img src="/icons/fb.png" alt="fb" className="w-12 h-12" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img src="/icons/twitter.png" alt="twitter" className="w-12 h-12" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img src="/icons/yt.png" alt="yt" className="w-12 h-12" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:opacity-80"
          >
            <img src="/icons/insta.png" alt="insta" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
