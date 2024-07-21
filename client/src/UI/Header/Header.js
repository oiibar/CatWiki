import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container py-6">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
