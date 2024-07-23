import axios from "axios";

const api = axios.create({
  baseURL: "https://cat-wiki-serv.vercel.app/api",
  timeout: 5000,
});

const getBreeds = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (e) {
    console.error("Error fetching breeds:", e.message);
    return { error: e.message };
  }
};

const getBreedById = async (breedId) => {
  try {
    const response = await api.get(`/${breedId}`);
    return response.data;
  } catch (e) {
    console.error(`Error fetching breed with ID ${breedId}:`, e.message);
    return { error: e.message };
  }
};

const getImagesByBreedId = async (breedId) => {
  try {
    const response = await api.get(`/images/${breedId}`);
    return response.data;
  } catch (e) {
    console.error(
      `Error fetching images for breed with ID ${breedId}:`,
      e.message
    );
    return { error: e.message };
  }
};

const CatService = { getImagesByBreedId, getBreedById, getBreeds };

export default CatService;
