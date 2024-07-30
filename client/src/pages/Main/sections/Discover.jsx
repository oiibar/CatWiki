import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import CatService from "../../../API/CatService";
import BreedCard from "../components/BreedCard";

const Discover = () => {
  const [randomBreeds, setRandomBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBreeds = useCallback(async () => {
    setLoading(true);
    const result = await CatService.getBreeds();
    if (!result.error) {
      const shuffledBreeds = result.sort(() => 0.5 - Math.random()).slice(0, 4);
      setRandomBreeds(shuffledBreeds);
    } else {
      console.error("Failed to fetch breeds:", result.error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <section className="bg-[#E3E1DC] container mx-auto px-4 lg:px-20 rounded-b-2xl flex flex-col gap-10">
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
        {loading ? (
          <div className="w-full flex justify-center items-center py-8">
            <div
              className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
              role="status"
            >
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          randomBreeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))
        )}
      </div>
    </section>
  );
};

export default Discover;
