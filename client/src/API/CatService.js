import axios from "axios";

class CatService {
  static async getBreeds() {
    try {
      const response = await axios.get("https://cat-wiki-serv.onrender.com/api/breeds");
      return response.data;
    } catch (e) {
      console.error("Error fetching breeds:", e.message);
      return { error: e.message };
    }
  }

  static async getBreedById(breedId) {
    try {
      const response = await axios.get(
        `https://cat-wiki-serv.onrender.com/api/breeds/${breedId}`
      );
      return response.data;
    } catch (e) {
      console.error(`Error fetching breed with ID ${breedId}:`, e.message);
      return { error: e.message };
    }
  }

  static async getImagesByBreedId(breedId) {
    try {
      const response = await axios.get(
        `https://cat-wiki-serv.onrender.com/api/breeds/images/${breedId}`
      );
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
