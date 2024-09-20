import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Register from "./sections/Register";
import ShowCase from "./sections/Show";
import Show from "./sections/Show";

const App = () => {
  return (
    <main className=" relative">
      <Navbar />
      <Hero />
      <ShowCase />
      <About />
      <Register />
    </main>
  );
};

export default App;
