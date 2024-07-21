import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({
  search,
  setSearch,
  handleSearchClick,
  handleKeyDown,
  handleFocus,
}) => {
  return (
    <div className="relative w-full">
      <FaSearch
        onClick={handleSearchClick}
        className="absolute right-3 sm:w-10 w-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
      />
      <input
        className="rounded-2xl md:pl-4 pl-2 pr-12 md:py-4 py-2 text-black w-full"
        placeholder="Enter your breed"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default SearchInput;
