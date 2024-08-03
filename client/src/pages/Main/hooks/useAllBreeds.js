import { useQuery } from "@tanstack/react-query";
import CatService from "../../../API/CatService";

const fetchAllBreeds = async () => {
  const result = await CatService.getBreeds();
  return result;
};

const useAllBreeds = () => {
  const query = useQuery({
    queryKey: ["allBreeds"],
    queryFn: fetchAllBreeds,
  });

  return query;
};

export default useAllBreeds;
