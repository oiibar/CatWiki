import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" flex container items-center gap-2 justify-center text-white bg-black p-6 rounded-t-2xl">
      <FaRegCopyright />
      <p className="text-sm">
        created by <span className="font-bold">Aibar</span> - devChallenge.io
        2024
      </p>
    </footer>
  );
};

export default Footer;
