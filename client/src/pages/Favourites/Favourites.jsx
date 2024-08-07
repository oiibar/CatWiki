import React, { useEffect, useState } from "react";
import FavouritesCard from "./FavouritesCard";
import SkeletonCard from "./SkeletonCard";
import Header from "./../../UI/Header";

const Favourites = () => {
  const [likedBreeds, setLikedBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedBreeds = () => {
      setLoading(true);
      const likedBreedIds = JSON.parse(localStorage.getItem("likedBreeds"));
      setLikedBreeds(likedBreedIds);
      setLoading(false);
    };

    fetchLikedBreeds();
  }, []);

  return (
    <div className="py-8">
      <Header />

      <h1 className="font-bold text-4xl text-center">Favourites</h1>
      <div className="flex flex-col gap-4 container">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : likedBreeds.length === 0 ? (
          <p className="text-center">No favourites yet</p>
        ) : (
          likedBreeds.map((breedId) => (
            <FavouritesCard key={breedId} breedId={breedId} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
