import React from "react";

const Register = () => {
  return (
    <section className="relative bg-blue-500 min-h-screen p-10">
      <div className="relative text-center mb-10 bg-[url('/assets/registerimg.png')] bg-cover h-40 flex justify-center items-center">
        <div className="absolute inset-0 bg-gray-200 opacity-50 top-0 right-0 w-1/2"></div>
        <h1 className="text-6xl font-bold text-white">
          REGISTER <span className="text-gray-900">YOUR TEAM</span>
        </h1>
      </div>

      <div className="text-center mb-10">
        <p className="text-3xl text-black font-bold">
          Here's what you can expect when you register your team:
        </p>
        <hr className="h-1 mt-1 bg-white border-none" />
      </div>

      <div className="space-y-8">
        <div className="flex">
          <div className="bg-gradient-to-r from-[#395637] to-[#91F888] text-white rounded-lg p-6 flex items-center space-x-6">
            <p className="text-xl">
              Each registered team gets its own customizable page showcasing
              <span className="font-bold text-[#E31414]">
                {" "}
                player profiles
              </span>{" "}
              &<span className="font-bold text-[#E31414]"> team stats</span>.
              Share your team’s journey with fans and stay organized for every
              match.
            </p>
          </div>
          <div>
            <img
              src="/assets/card1.png"
              alt="Cricket"
              className="w-auto z-10 "
            />
          </div>
        </div>

        <div className="bg-gradient-to-l from-[#395637] to-[#91F888] text-white rounded-lg p-6 flex items-center space-x-6">
          <img
            src="/assets/card2.png"
            alt="Stats"
            className="w-auto h-40 z-10"
          />
          <p className="text-xl">
            Track individual and team performance with
            <span className="font-bold text-[#E31414]">
              {" "}
              comprehensive stats
            </span>
            . From batting averages to bowling economies, our platform keeps a
            record of every player’s contributions, helping you analyze
            strengths and areas for improvement.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#395637] to-[#91F888] text-white rounded-lg p-6 flex items-center space-x-6">
          <p className="text-xl">
            Access exclusive
            <span className="font-bold text-[#E31414]">
              {" "}
              cricket tournaments
            </span>{" "}
            and leagues through our platform. Whether you want to participate in
            local competitions or larger championships, registering your team
            ensures you’re in the loop.
          </p>
          <img
            src="/assets/card3.png"
            alt="Tournaments"
            className="w-auto h-40 z-10"
          />
        </div>
      </div>

      <div className="text-center mt-10 flex justify-center items-center flex-col">
        <div className="flex">
          <img
            src="/assets/man1.png"
            alt="Flipped Image"
            className="transform "
          />
          <img
            src="/assets/man2.png"
            alt="Flipped Image"
            className="transform "
          />
          <img
            src="/assets/man3.png"
            alt="Flipped Image"
            className="transform "
          />
        </div>
        <button className="bg-[#E31414] text-white text-6xl w-1/2 font-bold py-3 px-6 rounded-full hover:bg-red-700 transition">
          REGISTER NOW
        </button>
        <hr className="h-[2px] mt-10 bg-black border-none w-1/2 text-center" />
      </div>
    </section>
  );
};

export default Register;
