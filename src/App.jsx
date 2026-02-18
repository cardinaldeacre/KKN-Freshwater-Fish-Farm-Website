import { Button } from "flowbite-react";
import Navbar from "./layouts/Navbar";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<h1>Beranda</h1>} />
        <Route path="/tentang" element={<h1>Tentang</h1>} />
        <Route path="/produk" element={<h1>Produk</h1>} />
        <Route path="/kontak" element={<h1>Kontak</h1>} />
      </Routes>
    </>
  );
}