import { Button } from "flowbite-react";
import Navbar from "./layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";
import About from "./pages/About";
import Guideline from "./pages/Guideline";
import Store from "./pages/Store";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/produk" element={<Store />} />
        <Route path="/panduan" element={<Guideline />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}