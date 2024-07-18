import React from "react";
import Home from "./sections/Home";
import Discover from "./sections/Discover";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <Discover />
      <Footer />
    </>
  );
};

export default Main;
