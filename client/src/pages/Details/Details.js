import React from "react";
import logo from "../../assets/logo.svg";
import Footer from "../Main/sections/Footer";

const Details = () => {
  return (
    <div className="container flex flex-col gap-16">
      <header>
        <div className="container py-6">
          <img src={logo} alt="Logo" />
        </div>
      </header>
      <div className="flex items-start justify-between px-28">
        <img
          src="https://placehold.co/370x370"
          className="block border-2 border-black rounded-xl"
          alt="Cat"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Bengal</h1>
          <p className="w-96 font-medium">
            Bengals are a lot of fun to live with, but they're definitely not
            the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn't provide it.
          </p>
          <p>
            <span className="font-bold">Temperament</span> Alert, Agile,
            Energetic, Demanding, Intelligent
          </p>
          <p>
            <span className="font-bold">Origin:</span> United States
          </p>
          <p>
            <span className="font-bold">Life Span:</span> 12 - 15 years
          </p>
          <div className="flex justify-between items-center">
            <p className="font-bold">Adaptability:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Affection level:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Child Friendly:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Grooming:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Intelligence</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Health issues:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Social needs:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Stranger friendly:</p>
            <div className="flex gap-2 justify-between">
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#544439] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
              <div className="rounded-2xl bg-[#E0E0E0] w-12 h-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Other photos</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
          </div>
          <div className="flex gap-4 justify-between">
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
            <img src="https://placehold.co/278x278" className="rounded-2xl" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
