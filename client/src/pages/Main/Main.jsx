import React from "react";
import Home from "./sections/Home";
import Discover from "./sections/Discover";
import Footer from "../../UI/Footer";
import Header from "../../UI/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <Discover />
      <Footer />
    </div>
  );
};

export default Main;
