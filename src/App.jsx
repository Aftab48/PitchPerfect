import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Show from "./sections/Show";

const App = () => {
  return (
    <main className=" relative">
      <Navbar />
      <Hero />
      <Show />
    </main>
  );
};

export default App;
