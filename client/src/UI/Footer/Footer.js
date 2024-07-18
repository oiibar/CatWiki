import React from "react";
import logo from "../../assets/logo-white.svg";
import copyright from "../../assets/c.svg";

const Footer = () => {
  return (
    <footer className="bg-black flex rounded-t-2xl justify-between container text-white sm:px-14 px-8 py-4">
      <img src={logo} alt="Logo" />
      <div className="flex gap-2 items-center">
        <img src={copyright} className="w-4" alt="Copyright" />
        <p className="sm:text-sm text-xs">
          created by <span className="font-bold">Aibar</span> - devChallenge.io
          2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
