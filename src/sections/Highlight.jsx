const Highlight = () => {
  return (
    <section className="relative bg-cover h-screen bg-[url('/assets/bg-img.png')]">
      <div className="absolute top-1/4 left-0 right-0 w-11/12 md:w-1/2 h-auto p-6 md:p-10 bg-white bg-opacity-60 text-gray-200 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">
          MATCH <br /> HIGHLIGHTS
        </h1>
        <h2 className="text-2xl md:text-4xl mt-4 font-extrabold text-[#544848]">
          KKR VS SRH
        </h2>
        <p className="text-lg mt-2 text-[#544848]">TATA IPL 2024</p>
        <p className="text-sm md:text-base mt-1 text-black-100 font-semibold">
          KKR won by 8 wickets (57 balls left)
        </p>
      </div>
    </section>
  );
};

export default Highlight;
