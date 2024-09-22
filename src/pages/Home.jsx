import About from "../sections/About";
import Hero from "../sections/Hero";
import Highlight from "../sections/Highlight";
import Register from "../sections/Register";
import ShowCase from "../sections/Show";

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <ShowCase />
      <About />
      <Register />
      <Highlight />
    </main>
  );
};

export default Home;