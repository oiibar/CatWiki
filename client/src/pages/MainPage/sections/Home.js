import React from "react";
import logoHero from "../../../assets/logoHero.svg";
import searchIcon from "../../../assets/search.svg"; // Step 1: Import the search icon
import Header from "../../../UI/Header/Header";

const Home = () => {
  return (
    <div className="px-2">
      <Header />
      <div className="container bg-[url('./assets/hero.png')] py-32 px-20 rounded-t-2xl bg-cover bg-no-repeat">
        <div className="text-[#fff] flex flex-col gap-10 w-1/3">
          <div>
            <img className="w-80" src={logoHero} alt="Hero Logo" />
            <p className="text-2xl">Get to know more about your cat breed</p>
          </div>
          <div className="relative">
            <img
              src={searchIcon}
              className="absolute right-3 w-6 top-1/2 transform -translate-y-1/2"
              alt="Search Icon"
            />
            <input
              className="rounded-2xl pl-6 pr-12 py-4 text-black w-full"
              placeholder="Enter your breed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
