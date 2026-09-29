import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/Backtotop";
import Home from "./pages/home";
import About from "./pages/about";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}