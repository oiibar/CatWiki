import React from "react";
import Header from "../../UI/Header";
import BreedCard from "./components/BreedCard";
import SkeletonCard from "./components/SkeletonCard"; // Import the SkeletonCard component
import useBreeds from "./hooks/useBreeds";

const Breeds = () => {
  const { breeds, loading } = useBreeds();

  const handleBreedClick = (id) => {
    window.location.href = `/details/${id}`;
  };

  return (
    <div className="container flex flex-col gap-6">
      <Header />
      <h1 className="font-bold text-4xl">Search for a breed</h1>
      <div className="flex flex-col gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : breeds.map((breed) => (
              <BreedCard
                key={breed.id} // Use breed.id for unique keys
                breed={breed}
                onClick={handleBreedClick}
              />
            ))}
      </div>
    </div>
  );
};

export default Breeds;
