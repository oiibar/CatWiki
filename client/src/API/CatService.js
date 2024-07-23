import axios from "axios";
const api = axios.create({
  baseURL: "https://cat-wiki-serv.vercel.app/api",
  timeout: 5000,
});

const getBreeds = async () => {
  try {
    const response = await api.get("/breeds");
    return response.data;
  } catch (e) {
    console.error("Error fetching breeds:", e.message);
    return { error: e.message };
  }
};

const getBreedById = async (breedId) => {
  try {
    const response = await api.get(`/breeds/${breedId}`);
    return response.data;
  } catch (e) {
    console.error(`Error fetching breed with ID ${breedId}:`, e.message);
    return { error: e.message };
  }
};

const getImagesByBreedId = async (breedId) => {
  try {
    const response = await api.get(`/breeds/images/${breedId}`);
    return response.data;
  } catch (e) {
    console.error(
      `Error fetching images for breed with ID ${breedId}:`,
      e.message
    );
    return { error: e.message };
  }
};

export default { getImagesByBreedId, getBreedById, getBreeds };
