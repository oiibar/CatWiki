import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo_white from "../../../assets/logo_white.svg";
import SearchInput from "../components/SearchInput";
import BreedSuggestions from "../components/BreedSuggestions";
import useAllBreeds from "../hooks/useAllBreeds";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const { data: breeds = [], error } = useAllBreeds();

  useEffect(() => {
    if (breeds.length) {
      const lowercasedSearch = search.toLowerCase();
      const newFilteredBreeds = breeds.filter((breed) =>
        breed.name.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredBreeds(newFilteredBreeds);
    }
  }, [search, breeds]);

  const handleBreedFetch = useCallback(
    async (breedName) => {
      const breed = breeds.find(
        (b) => b.name.toLowerCase() === breedName.toLowerCase()
      );
      if (breed) {
        navigate(`/details/${breed.id}`);
      } else {
        console.error("Breed not found");
      }
    },
    [breeds, navigate]
  );

  const handleKeyDown = useCallback(
    async (e) => {
      if (e.key === "Enter" && search !== "") {
        await handleBreedFetch(search);
        setShowSuggestions(false);
      }
    },
    [search, handleBreedFetch]
  );

  const handleSearchClick = useCallback(async () => {
    if (search !== "") {
      await handleBreedFetch(search);
      setShowSuggestions(false);
    }
  }, [search, handleBreedFetch]);

  const handleSuggestionClick = useCallback(
    async (breedName) => {
      await handleBreedFetch(breedName);
      setShowSuggestions(false);
    },
    [handleBreedFetch]
  );

  const handleFocus = useCallback(() => {
    setShowSuggestions(true);
  }, []);

  return (
    <section className="container p-4 lg:p-16 lg:py-32 sm:p-12 bg-[url('./assets/hero.png')] rounded-t-2xl bg-cover bg-no-repeat">
      <div className="text-white flex flex-col gap-10 md:w-1/3">
        <div>
          <img className="w-60 md:w-80" src={logo_white} alt="Hero Logo" />
          <p className="md:text-2xl text-lg">
            Get to know more about your cat breed
          </p>
        </div>
        <div className="relative w-full">
          <SearchInput
            search={search}
            setSearch={setSearch}
            handleSearchClick={handleSearchClick}
            handleKeyDown={handleKeyDown}
            handleFocus={handleFocus}
          />
          {showSuggestions && filteredBreeds.length > 0 && (
            <BreedSuggestions
              filteredBreeds={filteredBreeds}
              handleSuggestionClick={handleSuggestionClick}
              setShowSuggestions={setShowSuggestions}
            />
          )}
          {error && (
            <p className="text-red-500">
              Failed to load breeds. Please try again later.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
