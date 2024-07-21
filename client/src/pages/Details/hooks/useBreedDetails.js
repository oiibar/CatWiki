import { useState, useEffect } from "react";
import CatService from "../../../API/CatService";

const useBreedDetails = (breedId) => {
  const [breed, setBreed] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const breedData = await CatService.getBreedById(breedId);
        if (!breedData.error) {
          setBreed(breedData);
        }

        const imagesData = await CatService.getImagesByBreedId(breedId);
        if (!imagesData.error) {
          setImages(imagesData);
        }
      } catch (error) {
        console.error("Failed to fetch breed details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [breedId]);

  return { breed, images, loading };
};

export default useBreedDetails;
