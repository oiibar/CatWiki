import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import { ThemeContext } from "../theme/ThemeContext";
import logo_black from "../assets/logo_black.svg";
import logo_white from "../assets/logo_white.svg";

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <header>
      <div className="container py-6 px-0 flex justify-between">
        <Link to="/">
          <img
            src={isDarkMode ? logo_white : logo_black}
            alt="Logo"
            className="w-32 cursor-pointer"
          />
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <Link to="/favourites" className="cursor-pointer">
            Favourites
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
