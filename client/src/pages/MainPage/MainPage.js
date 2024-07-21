import React from "react";
import Home from "./sections/Home";
import Discover from "./sections/Discover";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <main className="flex flex-col min-h-screen">
        <Home />
        <Discover />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
