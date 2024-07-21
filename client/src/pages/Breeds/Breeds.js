import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../UI/Header/Header";
import CatService from "../../API/CatService"; // Import CatService for fetching breeds

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Track if there are more breeds to load
  const navigate = useNavigate(); // Initialize useNavigate hook

  const fetchBreeds = useCallback(
    async (page) => {
      if (loading) return; // Prevent multiple simultaneous requests
      setLoading(true);
      try {
        const result = await CatService.getBreeds(page);
        if (result.length > 0) {
          setBreeds((prevBreeds) => [...prevBreeds, ...result]);
        } else {
          setHasMore(false); // No more breeds to load
        }
      } catch (error) {
        console.error("Failed to fetch breeds:", error);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  useEffect(() => {
    fetchBreeds(page);
  }, [page, fetchBreeds]);

  // Handle scrolling to load more breeds
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleBreedClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container flex flex-col gap-6 text-[#291507]">
      <Header />
      <h1 className="font-bold text-4xl text-[#291507]">Search for a breed</h1>
      <div className="flex flex-col gap-4">
        {breeds.map((breed) => (
          <div
            key={breed.id}
            className="flex flex-col sm:flex-row justify-between gap-4 items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBreedClick(breed.id)}
          >
            <div
              className={`w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-48 border-2 border-black rounded-xl ${
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
            <div className="flex flex-col gap-4 w-full sm:w-2/3">
              <h3 className="font-semibold text-3xl">{breed.name}</h3>
              <p>{breed.description}</p>
            </div>
          </div>
        ))}
        {loading && <p className="text-center py-4">Loading more breeds...</p>}
      </div>
    </div>
  );
};

export default Breeds;
