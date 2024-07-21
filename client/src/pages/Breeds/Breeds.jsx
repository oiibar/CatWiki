import React from "react";
import Header from "../../UI/Header";
import BreedCard from "./components/BreedCard";
import useBreeds from "./hooks/useBreeds";

const Breeds = () => {
  const { breeds, loading } = useBreeds();

  const handleBreedClick = (id) => {
    window.location.href = `/details/${id}`;
  };

  return (
    <div className="container flex flex-col gap-6 text-[#291507]">
      <Header />
      <h1 className="font-bold text-4xl text-[#291507]">Search for a breed</h1>
      <div className="flex flex-col gap-4">
        {breeds.map((breed, index) => (
          <BreedCard
            key={index} // Ensure that the key is unique
            breed={breed}
            onClick={handleBreedClick}
          />
        ))}
        {loading && (
          <div className="flex justify-center items-center py-4">
            <div
              className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breeds;
