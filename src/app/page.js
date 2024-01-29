import React from "react";
import HomePage from "./pages/home/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
