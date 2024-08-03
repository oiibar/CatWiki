import { useQuery } from "@tanstack/react-query";
import CatService from "../../../API/CatService";

const fetchBreedDetails = async (breedId) => {
  try {
    const breedData = await CatService.getBreedById(breedId);
    if (breedData.error) throw new Error("Failed to fetch breed details");

    const imagesData = await CatService.getImagesByBreedId(breedId);
    if (imagesData.error) throw new Error("Failed to fetch images");

    return { breedData, imagesData };
  } catch (error) {
    throw new Error(`Error fetching breed details: ${error.message}`);
  }
};

const useBreedDetails = (breedId) => {
  const query = useQuery({
    queryKey: ["breedDetails", breedId],
    queryFn: () => fetchBreedDetails(breedId),
  });

  return {
    breed: query.data?.breedData,
    images: query.data?.imagesData,
    loading: query.isLoading,
    error: query.error,
  };
};

export default useBreedDetails;
