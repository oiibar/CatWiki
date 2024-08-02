import axios from "axios";

const API_KEY =
  "live_AY4XkKJuWZ8hXuwHOIZAG4w7uCAWiWChT8XW2L57ODUZQMx3aQVPtFDVSs5Tkmb7";

export const getAllBreeds = async (req, res) => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching breeds:", error);
    res.status(500).send({ error: "Failed to fetch breeds" });
  }
};

export const getBreed = async (req, res) => {
  const breedId = req.params.id;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/breeds/${breedId}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(`Error fetching breed with ID ${breedId}:`, error);
    res.status(500).send({ error: `Failed to fetch breed with ID ${breedId}` });
  }
};

export const getImages = async (req, res) => {
  const breedId = req.params.id;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${breedId}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(`Error fetching images for breed with ID ${breedId}:`, error);
    res
      .status(500)
      .send({ error: `Failed to fetch images for breed with ID ${breedId}` });
  }
};

export default {
  getAllBreeds,
  getBreed,
  getImages,
};
