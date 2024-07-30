import React from "react";
import logo_black from "../assets/logo_black.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container py-6 px-0 flex justify-between">
        <Link to="/">
          <img src={logo_black} alt="Logo" className="w-32" />
        </Link>
        <Link to="/favorites">
          <button className=" py-2 px-4 rounded\ transition duration-300">
            Favorites
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
