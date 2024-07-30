import React, { useEffect, useState } from "react";

const Favourites = () => {
  const [likedBreeds, setLikedBreeds] = useState([]);

  useEffect(() => {
    const fetchLikedBreeds = () => {
      const likedBreedIds =
        JSON.parse(localStorage.getItem("likedBreeds")) || [];
      setLikedBreeds(likedBreedIds);
    };

    fetchLikedBreeds();
  }, []);

  return (
    <div className="p-4">
      <h1
        className="text-4xl font-bold mb-4"
        onClick={() => {
          console.log(likedBreeds);
        }}
      >
        Favourites
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>asdf</div>
      </div>
    </div>
  );
};

export default Favourites;
