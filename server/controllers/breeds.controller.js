import axios from "axios";

export const getAllBreeds = async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key":
          "live_AY4XkKJuWZ8hXuwHOIZAG4w7uCAWiWChT8XW2L57ODUZQMx3aQVPtFDVSs5Tkmb7",
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching breeds:", error);
    res.status(500).send({ error: "Failed to fetch breeds" });
  }
};

export const getBreed = async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");

  const breedId = req.params.id;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/breeds/${breedId}`,
      {
        headers: {
          "x-api-key":
            "live_AY4XkKJuWZ8hXuwHOIZAG4w7uCAWiWChT8XW2L57ODUZQMx3aQVPtFDVSs5Tkmb7",
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
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");

  const breedId = req.params.id;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${breedId}&api_key=${"live_AY4XkKJuWZ8hXuwHOIZAG4w7uCAWiWChT8XW2L57ODUZQMx3aQVPtFDVSs5Tkmb7"}`,
      {
        headers: {
          "x-api-key":
            "live_AY4XkKJuWZ8hXuwHOIZAG4w7uCAWiWChT8XW2L57ODUZQMx3aQVPtFDVSs5Tkmb7",
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

export default { getAllBreeds, getBreed, getImages };
