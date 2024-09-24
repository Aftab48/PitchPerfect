import About from "../sections/About";
import Blog from "../sections/Blog";
import Hero from "../sections/Hero";
import Highlight from "../sections/Highlight";
import Register from "../sections/Register";
import Routine from "../sections/Routine";
import ShowCase from "../sections/Show";
import Sponsor from "../sections/Sponsor";

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <ShowCase />
      <About />
      <Register />
      <Highlight />
      <Routine />
      <Blog />
      <Sponsor />
    </main>
  );
};

export default Home;