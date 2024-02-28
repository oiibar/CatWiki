import express from "express";

const router = express.Router();

router.get("/", function async(req, res) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
    "Access-Control-Allow-Origin": "*",
  });

  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((error) => console.log("error", error));
});

router.get("/:id", function async(req, res) {
  const breedId = req.params.id;

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
    "Access-Control-Allow-Origin": "*",
  });

  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`, requestOptions)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((error) => console.log("error", error));
});

router.get("/images/:id", function async(req, res) {
  const breedId = req.params.id;

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
    "Access-Control-Allow-Origin": "*",
  });

  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${breedId}&api_key=${process.env.API_KEY}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((error) => console.log("error", error));
});

export default router;
