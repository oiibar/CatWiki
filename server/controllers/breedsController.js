import axios from "axios";

export const getBreeds = async (req, res) => {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds`, {
      headers: { "x-api-key": process.env.API_KEY },
    });

    const breeds = response.data;

    console.log(breeds);
    res.status(200).json(breeds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBreed = async (req, res) => {
  const breedId = req.params.breedId;
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/breeds/${breedId}`,
      {
        headers: { "x-api-key": process.env.API_KEY },
      }
    );

    const breed = response.data;

    console.log(breed);
    res.status(200).json(breed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
