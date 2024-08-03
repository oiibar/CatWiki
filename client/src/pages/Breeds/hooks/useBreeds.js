import { useQuery, useQueryClient } from "@tanstack/react-query";
import CatService from "../../../API/CatService";

const fetchBreeds = async () => {
  console.log("Fetching breeds...");
  const result = await CatService.getBreeds();
  return result;
};

const useBreeds = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

  const invalidateBreedsCache = () => {
    queryClient.invalidateQueries(["breeds"]);
  };

  return {
    breeds: query.data || [],
    loading: query.isLoading,
    error: query.error,
    invalidateBreedsCache,
  };
};

export default useBreeds;
