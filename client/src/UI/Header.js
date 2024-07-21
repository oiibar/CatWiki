import React from "react";
import logo_black from "../assets/logo_black.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container py-6 px-0">
        <Link to="/">
          <img src={logo_black} alt="Logo" className="w-32" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
