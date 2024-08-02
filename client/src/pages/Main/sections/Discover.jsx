import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import CatService from "../../../API/CatService";
import BreedCard from "../components/BreedCard";
import SkeletonCard from "../components/SkeletonCard";

const Discover = () => {
  const [randomBreeds, setRandomBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBreeds = useCallback(async () => {
    setLoading(true);
    try {
      const result = await CatService.getBreeds();
      if (!result.error) {
        const firstFourBreeds = result.slice(0, 4);
        setRandomBreeds(firstFourBreeds);
      } else {
        console.error("Failed to fetch breeds:", result.error);
      }
    } catch (error) {
      console.error("Failed to fetch breeds:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

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
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : randomBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
      </div>
    </section>
  );
};

export default React.memo(Discover);
