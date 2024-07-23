import axios from "axios";
const api = axios.create({
  baseURL: "https://cat-wiki-serv.vercel.app/api",
  timeout: 5000,
});

class CatService {
  static async getBreeds() {
    try {
      const response = await api.get(`${BASE_URL}`);
      return response.data;
    } catch (e) {
      console.error("Error fetching breeds:", e.message);
      return { error: e.message };
    }
  }

  static async getBreedById(breedId) {
    try {
      const response = await api.get(`${BASE_URL}/${breedId}`);
      return response.data;
    } catch (e) {
      console.error(`Error fetching breed with ID ${breedId}:`, e.message);
      return { error: e.message };
    }
  }

  static async getImagesByBreedId(breedId) {
    try {
      const response = await api.get(`${BASE_URL}/images/${breedId}`);
      return response.data;
    } catch (e) {
      console.error(
        `Error fetching images for breed with ID ${breedId}:`,
        e.message
      );
      return { error: e.message };
    }
  }
}

export default CatService;
