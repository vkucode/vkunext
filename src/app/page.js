import React from "react";
import HomePage from "./pages/home/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import EntrypPageLoading from "./components/entryPage/Entrypage";
export default function Home() {
  return (
    <>
      <EntrypPageLoading />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
