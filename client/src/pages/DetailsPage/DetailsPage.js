import React from "react";
import Info from "./sections/Info";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import Gallery from "./sections/Gallery";

const Details = () => {
  return (
    <div className="container flex flex-col gap-16">
      <Header />
      <div className="flex items-start justify-between px-28">
        <img
          src="https://placehold.co/370x370"
          className="block border-2 border-black rounded-xl"
          alt="Cat"
        />
        <Info />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Details;
