import React from "react";
import MaxWidthContainer from "../components/mmw";

const Sponsor = () => {
  const sponsors = [
    { name: "Coca Cola", img: "/assets/cocacola.png" },
    { name: "Adidas", img: "/assets/adidas.png" },
    { name: "Paytm", img: "/assets/paytm.png" },
    { name: "Jio", img: "/assets/jio.png" },
    { name: "Star Sports", img: "/assets/starsports.png" },
  ];

  return (
    <div className="bg-[#B0B0B0] py-10 relative">
      <MaxWidthContainer>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute top-0 left-0 h-full hidden md:block">
            <img
              src="/assets/sponsor.png"
              alt="Cricketer left"
              className="h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 h-full hidden md:block">
            <img
              src="/assets/sponsor2.png"
              alt="Cricketer right"
              className="h-full object-cover"
            />
          </div>

          <h2 className="text-xl md:text-3xl font-bold bg-black text-white inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md">
            OUR SPONSORS
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
              >
                <img
                  src={sponsor.img}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Sponsor;
