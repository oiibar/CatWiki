import axios from "axios";

// const baseURL = "http://localhost:5000/api";
const baseURL = "https://cat-wiki-serv.vercel.app/api";

const getBreeds = async () => {
  try {
    const response = await axios.get(`${baseURL}/`);
    return response.data;
  } catch (e) {
    console.error("Error fetching breeds:", e.message);
    return { error: e.message };
  }
};

const getBreedById = async (breedId) => {
  try {
    const response = await axios.get(`${baseURL}/${breedId}`);
    return response.data;
  } catch (e) {
    console.error(`Error fetching breed with ID ${breedId}:`, e.message);
    return { error: e.message };
  }
};

const getImagesByBreedId = async (breedId) => {
  try {
    const response = await axios.get(`${baseURL}/images/${breedId}`);
    return response.data;
  } catch (e) {
    console.error(
      `Error fetching images for breed with ID ${breedId}:`,
      e.message
    );
    return { error: e.message };
  }
};

const CatService = {
  getImagesByBreedId,
  getBreedById,
  getBreeds,
};

export default CatService;
