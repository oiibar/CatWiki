import React from "react";
import arrow from "../../../assets/arrow.svg";

const Discover = () => {
  return (
    <div className="bg-[#E3E1DC] container rounded-b-2xl px-20 py-10 flex flex-col gap-16">
      <div>
        <p className="font-medium">Most Searched Breeds</p>
        <hr className="border-[#4D270C] border-2 rounded-2xl w-10" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold">66+ Breeds For you to discover</h1>
        <div className="flex items-center justify-center gap-2 cursor-pointer font-bold transition-all duration-500">
          <a className="uppercase text-[#291507] opacity-60 hover:opacity-100">
            See More
          </a>
          <img src={arrow} className="w-6" alt="Arrow" />
        </div>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="flex flex-col gap-2">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="https://placehold.co/200x200"
            className="border-2 border-black rounded-xl"
            alt=""
          />
          <p className="font-semibold">Bengal</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
