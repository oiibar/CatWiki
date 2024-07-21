import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../../assets/arrow.svg";
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
    <section className="bg-[#E3E1DC] container mx-auto rounded-b-2xl sm:px-20 sm:py-10 px-8 py-4 flex flex-col gap-16 mb-20">
      <div>
        <p className="font-medium text-center sm:text-left">
          Most Searched Breeds
        </p>
        <hr className="border-[#4D270C] border-2 rounded-2xl w-20 mx-auto sm:mx-0" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
          66+ Breeds For you to discover
        </h1>
        <div className="flex items-center gap-2 cursor-pointer font-bold transition-all duration-500">
          <Link
            to="/breeds"
            className="uppercase text-[#291507] opacity-60 hover:opacity-100"
          >
            See More
          </Link>
          <img src={arrow} className="w-6" alt="Arrow" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center">
        {randomBreeds.map((breed) => (
          <div
            key={breed.id}
            className="flex flex-col gap-2 items-center cursor-pointer"
            onClick={() => handleBreedClick(breed.id)}
          >
            <div
              className={`w-48 h-48 border-2 border-black rounded-xl ${
                breed.reference_image_id ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              {breed.reference_image_id ? (
                <img
                  src={`http://localhost:5000/api/breeds/images/${breed.reference_image_id}`}
                  className="w-full h-full object-cover"
                  alt={breed.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200"; // Fallback placeholder
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  No Image Available
                </div>
              )}
            </div>
            <p className="font-semibold">{breed.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
