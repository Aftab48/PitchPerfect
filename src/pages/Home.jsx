import About from "../sections/About";
import Hero from "../sections/Hero";
import Highlight from "../sections/Highlight";
import Register from "../sections/Register";
import Routine from "../sections/Routine";
import ShowCase from "../sections/Show";

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <ShowCase />
      <About />
      <Register />
      <Highlight />
      <Routine />
    </main>
  );
};

export default Home;