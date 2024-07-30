import React, { useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";

const BreedCard = ({ breed }) => {
  const navigate = useNavigate();

  const handleBreedClick = useCallback(
    (id) => {
      navigate(`/details/${id}`);
    },
    [navigate]
  );

  return (
    <div
      className="cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
      onClick={() => handleBreedClick(breed.id)}
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={breed.image?.url || "https://placehold.co/200x200"}
          alt={breed.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="font-semibold text-lg truncate">{breed.name}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(BreedCard);
