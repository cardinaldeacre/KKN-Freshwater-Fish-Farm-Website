import { Button } from "flowbite-react";
import Navbar from "./layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<h1>Tentang</h1>} />
        <Route path="/produk" element={<h1>Produk</h1>} />
        <Route path="/kontak" element={<h1>Kontak</h1>} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}