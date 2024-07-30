// src/hooks/useBreeds.js

import { useState, useEffect, useCallback } from "react";
import CatService from "../../../API/CatService";

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBreeds = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await CatService.getBreeds(page); // Depend on `page`
      if (result.length > 0) {
        setBreeds((prevBreeds) => [...prevBreeds, ...result]); // Append new breeds to existing ones
      }
    } catch (error) {
      console.error("Failed to fetch breeds:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, page]); // Include `page` in the dependency array

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

  return { breeds, loading };
};

export default useBreeds;
