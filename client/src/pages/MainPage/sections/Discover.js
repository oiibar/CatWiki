import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import CatService from "../../../API/CatService"; // Import CatService for fetching breeds

const Discover = () => {
  const [breeds, setBreeds] = useState([]);
  const [randomBreeds, setRandomBreeds] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchBreeds = async () => {
      const result = await CatService.getBreeds();
      if (!result.error) {
        setBreeds(result);
        // Select 4 random breeds
        const shuffledBreeds = result
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setRandomBreeds(shuffledBreeds);
      } else {
        console.error("Failed to fetch breeds:", result.error);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedClick = (id) => {
    navigate(`/details/${id}`);
  };

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
      <div className="flex flex-wrap gap-6 justify-center lg:justify-between">
        {randomBreeds.map((breed) => (
          <div
            key={breed.id}
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
        ))}
      </div>
    </section>
  );
};

export default Discover;
