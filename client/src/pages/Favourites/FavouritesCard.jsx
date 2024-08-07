import React from "react";
import useBreedDetails from "../Details/hooks/useBreedDetails";

const handleBreedClick = (id) => {
  window.location.href = `/details/${id}`;
};

const FavouritesCard = ({ breedId }) => {
  const { breed, images, loading, error } = useBreedDetails(breedId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error || !breed) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-4xl font-bold">
          {error
            ? "Failed to load breed details"
            : "No breed details available"}
        </div>
      </div>
    );
  }

  const imgSrc = images[0]?.url || "https://placehold.co/370x370";

  return (
    <div
      onClick={() => handleBreedClick(breedId)}
      className="relative flex flex-col sm:flex-row justify-between gap-4 items-center cursor-pointer"
    >
      <div className="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-48 border-2 border-black rounded-xl bg-gray-300">
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-xl"
          alt={breed.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/200x200";
          }}
        />
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

export default FavouritesCard;
