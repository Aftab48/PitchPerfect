import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
