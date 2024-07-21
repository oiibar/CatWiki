// src/hooks/useBreeds.js

import { useState, useEffect, useCallback } from "react";
import CatService from "../../../API/CatService"; // Adjust the import path if necessary

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchBreeds = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await CatService.getBreeds(page);
      if (result.length > 0) {
        setBreeds((prevBreeds) => [...prevBreeds, ...result]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch breeds:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, page]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return { breeds, hasMore, loading };
};

export default useBreeds;
