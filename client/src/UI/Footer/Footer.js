import React from "react";
import copyright from "../../assets/copyright.svg";

const Footer = () => {
  return (
    <footer className=" flex container gap-2 justify-center text-white bg-black p-6 rounded-t-2xl">
      <img src={copyright} className="w-4" alt="Copyright" />
      <p className="text-sm">
        created by <span className="font-bold">Aibar</span> - devChallenge.io
        2024
      </p>
    </footer>
  );
};

export default Footer;
