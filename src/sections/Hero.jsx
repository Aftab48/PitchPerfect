const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-500 overflow-x-hidden">
      {/* Left Image Section */}
      <div className="md:w-2/5 w-full relative">
        <img
          src="/assets/bg-hero.png"
          alt="Cricket Gear"
          className="h-full max-h-[100vh] w-full object-cover md:ml-auto"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-[52%] w-full z-20 flex flex-col justify-center p-8 text-white text-center md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-green-400 mb-4">
          PITCHPERFECT
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed mt-4">
          Step into the world of cricket with{" "}
          <span className="text-black font-semibold">PitchPerfect</span>, your{" "}
          <span className="text-black font-semibold">
            premier destination
          </span>{" "}
          for dynamic cricket tournaments across all formats.
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center md:justify-end space-x-4">
          <a href="https://facebook.com" target="_blank" className="hover:opacity-80">
            <img src="/icons/fb.png" alt="fb" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:opacity-80">
            <img src="/icons/twitter.png" alt="twitter" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a href="https://youtube.com" target="_blank" className="hover:opacity-80">
            <img src="/icons/yt.png" alt="yt" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:opacity-80">
            <img src="/icons/insta.png" alt="insta" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
  