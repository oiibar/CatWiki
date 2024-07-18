import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container py-6">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
