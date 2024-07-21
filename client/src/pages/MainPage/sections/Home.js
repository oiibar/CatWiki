import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoHero from "../../../assets/logoHero.svg";
import searchIcon from "../../../assets/search.svg";
import CatService from "../../../API/CatService";

const Home = () => {
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      const result = await CatService.getBreeds();
      if (!result.error) {
        setBreeds(result);
        setFilteredBreeds(result);
      } else {
        console.error("Failed to fetch breeds:", result.error);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const updateFilteredBreeds = () => {
      if (search === "") {
        setFilteredBreeds(breeds);
      } else {
        const lowercasedSearch = search.toLowerCase();
        const newFilteredBreeds = breeds.filter((breed) =>
          breed.name.toLowerCase().includes(lowercasedSearch)
        );
        setFilteredBreeds(newFilteredBreeds);
      }
    };

    updateFilteredBreeds();
  }, [search, breeds]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && search !== "") {
      console.log("User searched for:", search);
      await handleBreedFetch(search);
      setShowSuggestions(false);
    }
  };

  const handleSearchClick = async () => {
    if (search !== "") {
      console.log("User searched for:", search);
      await handleBreedFetch(search);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = async (breedName) => {
    console.log("User selected breed:", breedName);
    await handleBreedFetch(breedName);
    setShowSuggestions(false);
  };

  const handleBreedFetch = async (breedName) => {
    const breed = breeds.find(
      (b) => b.name.toLowerCase() === breedName.toLowerCase()
    );
    if (breed) {
      const breedData = await CatService.getBreedById(breed.id);
      console.log("Fetched breed data:", breedData);

      navigate(`/details/${breed.id}`);
    } else {
      console.error("Breed not found");
    }
  };

  return (
    <section className="container bg-[url('./assets/HeroImagesm.png')] rounded-t-2xl bg-cover bg-no-repeat">
      <div className="text-white flex flex-col gap-10 md:w-1/3">
        <div>
          <img className="w-80" src={logoHero} alt="Hero Logo" />
          <p className="md:text-2xl text-lg">
            Get to know more about your cat breed
          </p>
        </div>
        <div className="relative">
          <img
            src={searchIcon}
            className="absolute right-3 sm:w-6 w-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            alt="Search Icon"
            onClick={handleSearchClick}
          />
          <input
            className="rounded-2xl md:pl-4 pl-2 pr-12 md:py-4 py-2 text-black w-full"
            placeholder="Enter your breed"
            value={search}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          {showSuggestions && filteredBreeds.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute top-full left-0 w-full bg-white text-[#000] rounded-xl shadow-lg mt-1 z-10"
              style={{ maxHeight: "200px", overflowY: "auto" }} // Set max height and enable vertical scrolling
            >
              <ul className="list-none p-0 m-0">
                {filteredBreeds.map((breed) => (
                  <li
                    key={breed.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(breed.name)}
                  >
                    {breed.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
