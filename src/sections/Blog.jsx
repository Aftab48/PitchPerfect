const Blog = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8 min-h-screen"
      style={{ backgroundImage: "url(/assets/blog.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-6xl mx-auto h-full flex">
        <div className="flex flex-col justify-between w-1/3 h-full text-white">
          <div className="flex flex-col gap-y-14 justify-start h-full">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Unlock the Inside Scoop!
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8">
              Dive into Expert Opinions, In-Depth Articles, and Exclusive
              Cricket Insights.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-4 px-8 rounded-full">
              BLOGS
            </button>
          </div>
        </div>

        {/* Middle-right stacked images */}
        <div className="relative w-2/3 flex justify-center items-center">
          <img
            src="/assets/blog1.png"
            alt="Blog 1"
            className="w-64 h-auto shadow-lg absolute rounded-lg z-[30] right-[15vw] -top-[3vh]"
          />
          <img
            src="/assets/blog2.png"
            alt="Blog 2"
            className="w-64 h-auto shadow-lg rounded-lg absolute top-[20vh] left-[10vw] z-10"
          />
          <img
            src="/assets/blog3.png"
            alt="Blog 3"
            className="w-52 top-[4vh] h-auto shadow-lg rounded-lg absolute bottom-0 left-[35vw] z-40"
          />
          <img
            src="/assets/blog4.png"
            alt="Blog 4"
            className="w-64 h-auto shadow-lg rounded-lg absolute right-[15vw] top-[30vh] z-30"
          />
        </div>
      </div>

      <p className="absolute bottom-4 right-80 text-center text-green-400 text-6xl font-bold">
        Read Now & Stay Informed
      </p>
    </section>
  );
};

export default Blog;
