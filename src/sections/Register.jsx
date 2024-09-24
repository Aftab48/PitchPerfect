const Register = () => {
  return (
    <section className="relative bg-blue-500 min-h-screen p-4 md:p-10">
      <div className="relative text-center mb-10 bg-[url('/assets/registerimg.png')] bg-cover h-40 flex justify-center items-center">
        <div className="absolute inset-0 bg-gray-200 opacity-80 top-0 left-auto right-0 w-full md:w-1/2"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          REGISTER{" "}
          <span
            className="text-white-600 z-10"
            style={{ WebkitTextStroke: "6px #000000" }}
          >
            YOUR TEAM
          </span>
        </h1>
      </div>

      <div className="text-center mb-10">
        <p className="text-xl md:text-3xl text-black font-bold">
          Here&apos;s what you can expect when you register your team:
        </p>
        <hr className="h-1 mt-1 bg-white border-none" />
      </div>

      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/assets/card1.png"
            alt="Cricket"
            className="w-full md:w-auto z-10 mb-4 md:mb-0"
          />
          <div className="bg-gradient-to-r from-[#395637] to-[#91F888] text-white rounded-3xl p-6 flex items-center space-x-6">
            <p className="text-xl md:text-3xl">
              Each registered team gets its own customizable page showcasing
              <span className="font-bold text-[#E31414]">
                {" "}
                player profiles
              </span>{" "}
              &<span className="font-bold text-[#E31414]"> team stats</span>.
              Share your team&apos;s journey with fans and stay organized for
              every match.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="bg-gradient-to-l from-[#395637] to-[#91F888] text-white rounded-3xl p-6 flex items-center space-x-6">
            <p className="text-xl md:text-3xl">
              Track individual and team performance with
              <span className="font-bold text-[#E31414]">
                {" "}
                comprehensive stats
              </span>
              . From batting averages to bowling economies, our platform keeps a
              record of every player&apos;s contributions, helping you analyze
              strengths and areas for improvement.
            </p>
          </div>
          <img
            src="/assets/card2.png"
            alt="Stats"
            className="w-full md:w-auto h-auto z-10 mb-4 md:mb-0"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/assets/card3.png"
            alt="Tournaments"
            className="w-full md:w-auto h-auto z-10 mb-4 md:mb-0"
          />
          <div className="bg-gradient-to-r from-[#395637] to-[#91F888] text-white rounded-3xl p-6 flex items-center space-x-6">
            <p className="text-xl md:text-3xl">
              Access exclusive
              <span className="font-bold text-[#E31414]">
                {" "}
                cricket tournaments
              </span>
              and leagues through our platform. Whether you want to participate
              in local competitions or larger championships, registering your
              team ensures you&apos;re in the loop.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/man1.png"
            alt="Man 1"
            className="w-1/3 md:w-auto transform"
          />
          <img
            src="/assets/man2.png"
            alt="Man 2"
            className="w-1/3 md:w-auto transform"
          />
          <img
            src="/assets/man3.png"
            alt="Man 3"
            className="w-1/3 md:w-auto transform"
          />
        </div>
        <button className="bg-[#E31414] text-white text-3xl md:text-6xl w-full md:w-1/2 font-bold py-3 px-6 rounded-full hover:bg-red-700 transition">
          REGISTER NOW
        </button>
        <hr className="h-[2px] mt-10 bg-black border-none w-full md:w-1/2 text-center" />
      </div>
    </section>
  );
};

export default Register;
