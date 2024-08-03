import { useQuery } from "@tanstack/react-query";
import CatService from "../../../API/CatService";

const fetchRandomBreeds = async () => {
  const result = await CatService.getBreeds();
  return result.slice(0, 4);
};

const useRandomBreeds = () => {
  const query = useQuery({
    queryKey: ["randomBreeds"],
    queryFn: fetchRandomBreeds,
  });

  return query;
};

export default useRandomBreeds;
