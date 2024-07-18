import React from "react";
import arrow from "../../../assets/arrow.svg";

const Discover = () => {
  return (
    <section className="bg-[#E3E1DC] container rounded-b-2xl sm:px-20 sm:py-10 px-8 py-4 flex flex-col gap-16 mb-20">
      <div>
        <p className="font-medium">Most Searched Breeds</p>
        <hr className="border-[#4D270C] border-2 rounded-2xl w-10" />
      </div>
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-2xl font-bold">
          66+ Breeds For you to discover
        </h1>
        <div className="flex items-center justify-center gap-2 cursor-pointer font-bold transition-all duration-500">
          <a
            href="youtube.com"
            className="uppercase text-[#291507] opacity-60 hover:opacity-100"
          >
            See More
          </a>
          <img src={arrow} className="w-6" alt="Arrow" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
        <div className="flex flex-col gap-2 w-1/3">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
      </div>
    </section>
  );
};

export default Discover;
