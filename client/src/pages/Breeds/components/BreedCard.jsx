import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const BreedCard = ({ breed, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedBreeds = JSON.parse(localStorage.getItem("likedBreeds")) || [];
    setIsLiked(likedBreeds.includes(breed.id));
  }, [breed.id]);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => {
      const newLikedStatus = !prev;
      const likedBreeds = JSON.parse(localStorage.getItem("likedBreeds")) || [];

      if (newLikedStatus) {
        localStorage.setItem(
          "likedBreeds",
          JSON.stringify([...likedBreeds, breed.id])
        );
      } else {
        localStorage.setItem(
          "likedBreeds",
          JSON.stringify(likedBreeds.filter((id) => id !== breed.id))
        );
      }

      return newLikedStatus;
    });
  };

  return (
    <div
      className="relative flex flex-col sm:flex-row justify-between gap-4 items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      onClick={() => onClick(breed.id)}
    >
      <div className="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-48 border-2 border-black rounded-xl bg-gray-300">
        <img
          src={breed.image?.url || "https://placehold.co/370x370"}
          className="w-full h-full object-cover rounded-xl"
          alt={breed.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/200x200";
          }}
        />
        <button
          onClick={handleLikeClick}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
          aria-label="Like"
        >
          {isLiked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <CiHeart className="text-gray-700" />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full sm:w-2/3">
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold text-3xl">{breed.name}</h3>
        </div>
        <p>{breed.description}</p>
      </div>
    </div>
  );
};

export default BreedCard;
