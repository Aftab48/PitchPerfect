const Blog = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8 min-h-screen"
      style={{ backgroundImage: "url(/assets/blog.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-6xl mx-auto h-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-between md:w-1/3 w-full h-full text-white mb-8 md:mb-0">
          <div className="flex flex-col justify-start h-full">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Unlock the Inside Scoop!
            </h1>
            <p className="text-lg md:text-2xl font-light mb-8">
              Dive into Expert Opinions, In-Depth Articles, and Exclusive
              Cricket Insights.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl py-3 md:py-4 px-6 md:px-8 rounded-full">
              BLOGS
            </button>
          </div>
        </div>

        <div className="relative md:w-2/3 w-full flex flex-wrap justify-center items-center space-y-4 md:space-y-0">
          <img
            src="/assets/blog1.png"
            alt="Blog 1"
            className="w-40 h-auto md:w-64 shadow-lg rounded-lg z-[30] right-[5vw] -top-[3vh] md:absolute"
          />
          <img
            src="/assets/blog2.png"
            alt="Blog 2"
            className="w-40 h-auto md:w-64 shadow-lg rounded-lg top-[20vh] left-[5vw] md:absolute z-10"
          />
          <img
            src="/assets/blog3.png"
            alt="Blog 3"
            className="w-32 md:w-52 shadow-lg rounded-lg bottom-0 left-[20vw] md:absolute z-40"
          />
          <img
            src="/assets/blog4.png"
            alt="Blog 4"
            className="w-40 md:w-64 shadow-lg rounded-lg right-[5vw] top-[30vh] md:absolute z-30"
          />
        </div>
      </div>

      <p className="absolute bottom-4 left-4 md:left-auto md:right-80 text-center text-green-400 text-3xl md:text-6xl font-bold">
        Read Now & Stay Informed
      </p>
    </section>
  );
};

export default Blog;
