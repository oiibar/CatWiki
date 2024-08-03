import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import SkeletonCard from "../components/SkeletonCard";
import BreedCard from "../components/BreedCard";
import useRandomBreeds from "../hooks/useRandomBreeds";

const Discover = () => {
  const { data: randomBreeds, isLoading, error } = useRandomBreeds();

  return (
    <section className="bg-[#E3E1DC] dark:bg-section-bg container mx-auto px-4 lg:px-20 rounded-b-2xl flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-center sm:text-left">
          66+ Breeds For You to Discover
        </h1>
        <div className="flex items-center opacity-60 hover:opacity-100 cursor-pointer font-bold transition-all duration-500">
          <Link to="/breeds" className="flex items-center gap-2">
            SEE MORE
            <FaArrowRightLong className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : error ? (
          <p className="text-red-500">
            Failed to load breeds. Please try again later.
          </p>
        ) : (
          randomBreeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))
        )}
      </div>
    </section>
  );
};

export default React.memo(Discover);
