import React, { useRef, useEffect, useCallback, memo } from "react";

const BreedSuggestions = ({
  filteredBreeds,
  handleSuggestionClick,
  setShowSuggestions,
}) => {
  const suggestionsRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    },
    [setShowSuggestions]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={suggestionsRef}
      className="absolute w-full bg-white text-black rounded-xl shadow-lg mt-1 z-10"
      style={{ maxHeight: "200px", overflowY: "auto" }}
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
  );
};

export default memo(BreedSuggestions);
