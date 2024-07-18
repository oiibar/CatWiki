import axios from "axios";

export default class CatService {
  static async getBreeds() {
    try {
      const response = await axios.get(
        "https://cat-wiki-serv.onrender.com/api/breeds"
      );
      return response.data;
    } catch (e) {
      console.error("Error fetching breeds:", e);
      throw e;
    }
  }

  static async getBreedById(breedId) {
    try {
      const response = await axios.get(
        `https://cat-wiki-serv.onrender.com/api/breeds/${breedId}`
      );
      return response.data;
    } catch (e) {
      console.error("Error fetching breed:", e);
      throw e;
    }
  }

  static async getImagesByBreedId(breedId) {
    try {
      const response = await axios.get(
        `https://cat-wiki-serv.onrender.com/api/breeds/images/${breedId}`
      );
      return response.data;
    } catch (e) {
      console.error("Error fetching images:", e);
      throw e;
    }
  }
}
