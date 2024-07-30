import React, { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center p-2 w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out
        ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}
      `}
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ease-in-out
          ${isDarkMode ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {isDarkMode ? (
          <IoSunny className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
