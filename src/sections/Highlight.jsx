import React from "react";

const Highlight = () => {
  return (
    <section className="relative bg-cover h-screen bg-[url('/assets/bg-img.png')]">
      
      <div className="absolute inset-y-0 left-4 flex items-center text-white">
        <button className="text-3xl">{"<"}</button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center text-white">
        <button className="text-3xl">{">"}</button>
      </div>

      <div className="absolute top-1/4 left-0 right-0 w-full md:w-1/2 h-auto p-10 bg-white bg-opacity-60 text-gray-200">
        <h1 className="text-5xl font-bold">
          MATCH <br /> HIGHLIGHTS
        </h1>
        <h2 className="text-4xl mt-4 font-[1000] text-[#544848]">KKR VS SRH</h2>
        <p className="text-lg mt-2 text-[#544848]">TATA IPL 2024</p>
        <p className="text-base mt-1 text-black-100 font-[600]">KKR won by 8 wickets (57 balls left)</p>
      </div>
    </section>
  );
};

export default Highlight;
