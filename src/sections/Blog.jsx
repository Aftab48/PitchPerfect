import React from "react";

const Blog = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8 min-h-screen "
      style={{ backgroundImage: "url(/assets/blog.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="grid grid-rows-1 items-center">
        <div className="relative z-10 max-w-6xl w-full text-white text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Unlock the Inside Scoop!
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Dive into Expert Opinions, In-Depth Articles, and Exclusive Cricket
            Insights.
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-full">
            BLOGS
          </button>

          <div className="items-center mt-10 gap-x-6">
            <img
              src="/assets/blog1.png"
              alt="Blog 1"
              className="w-32 h-auto shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="/assets/blog2.png"
              alt="Blog 2"
              className="w-32 h-auto shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="/assets/blog3.png"
              alt="Blog 3"
              className="w-32 h-auto shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          <p className="mt-12 text-green-400 text-2xl font-bold">
            Read Now & Stay Informed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
