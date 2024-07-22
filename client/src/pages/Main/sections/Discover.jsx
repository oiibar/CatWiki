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
    <section className="bg-[#E3E1DC] container rounded-b-2xl flex flex-col gap-10">
      <div>
        <p className="font-medium">Most Searched Breeds</p>
        <hr className="hr" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          66+ Breeds For you to discover
        </h1>
        <div className="flex items-center opacity-60 hover:opacity-100 cursor-pointer font-bold transition-all duration-500">
          <Link to="/breeds">SEE MORE</Link>
          <FaArrowRightLong className="w-12" />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center lg:justify-between relative">
        {loading ? (
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
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
