import React, { memo } from "react";
import Home from "./sections/Home";
import Discover from "./sections/Discover";
import Footer from "../../UI/Footer";
import Header from "../../UI/Header";

const Main = () => (
  <div>
    <Header />
    <Home />
    <Discover />
    <Footer />
  </div>
);

export default memo(Main);
