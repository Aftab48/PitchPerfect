const AboutUs = () => {
  return (
    <section>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/bg-11.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-12 text-white">
          <h1 className="text-4xl font-bold uppercase tracking-wider">
            XYZ Organisation
          </h1>
          <div className="mt-4 p-6 bg-white/10 rounded-lg">
            <p className="text-lg leading-relaxed">
              XYZ Organisation has been at the forefront of cricket promotion
              and development, committed to organizing and managing high-quality
              cricket tournaments across all formats. Since our founding in{" "}
              <span className="font-semibold">2005</span>, we have transformed
              from a small initiative into a nationwide force in the cricketing
              world, offering a platform for players, fans, and teams to engage
              with the sport like never before.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-red-500">Our History</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Founded to create opportunities for cricket enthusiasts, XYZ
              Organisation has made it its mission to provide an inclusive
              platform for everyone passionate about the game. Starting with
              local matches, we have grown into an organisation that now
              organizes over <span className="font-semibold">500 matches</span>{" "}
              and multiple cricket leagues annually, ranging from fast-paced T20
              tournaments to enduring multi-day competitions.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Our leagues cater to players of all skill levels, providing a
              chance to hone their talents while competing at higher levels.
              Through meticulous planning and a deep understanding of the sport,
              we have successfully brought together teams and fans, fostering a
              sense of community around the sport.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/bg-11.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-12 text-white">
          <h2 className="text-2xl font-semibold text-red-500 uppercase tracking-wider">
            PitchPerfect: Our Flagship Platform
          </h2>
          <div className="mt-4 p-6 bg-white/10 rounded-lg">
            <p className="text-lg leading-relaxed">
              In collaboration with XYZ Organisation, PitchPerfect is our
              cutting-edge digital platform designed to take cricket to new
              heights. PitchPerfect is your premier destination for real-time
              match updates, league tracking, and detailed analyses, all within
              a user-friendly interface. It serves as a hub for cricket lovers
              to stay informed about their favourite matches and tournaments,
              while also offering exciting features such as live score updates,
              expert commentary, and player stats.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-red-500">
              Our Mission & The Road Ahead
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              At XYZ Organisation and PitchPerfect, our mission is to grow the
              sport of cricket by providing seamless access to matches,
              tournaments, and player data. By combining the best of on-field
              action with digital innovation, we are bringing fans closer to the
              sport and providing teams with the tools they need to excel.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              As we continue to innovate, XYZ Organisation and PitchPerfect are
              dedicated to expanding our reach, offering more tournaments,
              integrating advanced technology for an enhanced user experience,
              and building a vibrant community of cricket enthusiasts. With each
              match, we aim to foster a deeper connection between the game and
              its fans, ensuring that cricket continues to thrive for
              generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
