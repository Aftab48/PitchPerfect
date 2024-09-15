import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ShowCase from "./sections/Show";
import Show from "./sections/Show";

const App = () => {
  return (
    <main className=" relative">
      <Navbar />
      <Hero />
      <ShowCase />
    </main>
  );
};

export default App;
