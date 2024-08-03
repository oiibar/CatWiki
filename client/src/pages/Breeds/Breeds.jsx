import React from "react";
import Header from "../../UI/Header";
import BreedCard from "./components/BreedCard";
import SkeletonCard from "./components/SkeletonCard";
import useBreeds from "./hooks/useBreeds";

const Breeds = () => {
  const { breeds, loading, error } = useBreeds();

  const handleBreedClick = (id) => {
    window.location.href = `/details/${id}`;
  };

  return (
    <div className="container flex flex-col gap-6">
      <Header />
      <h1 className="font-bold text-4xl">Search for a breed</h1>
      <div className="flex flex-col gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : error ? (
          <p className="text-red-500">
            Failed to load breeds. Please try again later.
          </p>
        ) : breeds.length === 0 ? (
          <p>No breeds available.</p>
        ) : (
          breeds.map((breed) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              onClick={() => handleBreedClick(breed.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Breeds;
