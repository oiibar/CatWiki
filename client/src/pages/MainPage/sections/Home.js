import React from "react";
import logoHero from "../../../assets/logoHero.svg";
import searchIcon from "../../../assets/search.svg"; // Step 1: Import the search icon

const Home = () => {
  return (
    <div className="container sm:bg-[url('./assets/HeroImagesm.png')] bg-black py-14 px-8 sm:py-10 sm:px-12 rounded-t-2xl bg-cover bg-no-repeat">
      <div className="text-[#fff] flex flex-col gap-10 sm:w-1/3 w-full">
        <div>
          <img className="w-80" src={logoHero} alt="Hero Logo" />
          <p className="md:text-2xl text-lg">
            Get to know more about your cat breed
          </p>
        </div>
        <div className="relative">
          <img
            src={searchIcon}
            className="absolute right-3 sm:w-6 w-4 top-1/2 transform -translate-y-1/2"
            alt="Search Icon"
          />
          <input
            className="rounded-2xl md:pl-6 pl-2 pr-12 md:py-4 py-2 text-black w-full"
            placeholder="Enter your breed"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
