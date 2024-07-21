import React from "react";
import { useNavigate } from "react-router-dom";

const BreedCard = ({ breed }) => {
  const navigate = useNavigate();

  const handleBreedClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="cursor-pointer w-1/5"
      onClick={() => handleBreedClick(breed.id)}
    >
      <img
        src={breed.image?.url || "https://placehold.co/200x200"}
        alt={breed.name}
        className="w-full h-full object-cover rounded-xl mb-2"
      />
      <p className="font-semibold">{breed.name}</p>
    </div>
  );
};

export default BreedCard;
