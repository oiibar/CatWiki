import React, { useEffect, useState, useCallback } from "react";
import CatService from "../../../API/CatService";
import "./index.css";
import bg from "./assets/bg.png";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breed, setBreed] = useState({});
  const [images, setImages] = useState([]);
  const [loadingBreeds, setLoadingBreeds] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);

  const getBreed = useCallback((breedId) => {
    if (breedId) {
      CatService.getBreedById(breedId)
        .then((data) => setBreed(data))
        .catch((error) => console.log("Error fetching breed:", error));
    }
  }, []);

  const getImages = useCallback((breedId) => {
    if (breedId) {
      setLoadingImages(true);
      CatService.getImagesByBreedId(breedId)
        .then((data) => setImages(data))
        .catch((error) => console.log("Error fetching images:", error))
        .finally(() => setLoadingImages(false));
    }
  }, []);

  const getBreeds = useCallback(() => {
    setLoadingBreeds(true);
    CatService.getBreeds()
      .then((data) => setBreeds(data))
      .catch((error) => console.log("Error fetching breeds:", error))
      .finally(() => setLoadingBreeds(false));
  }, []);

  const handleBreed = (breedId) => {
    setSelectedBreed(breedId);
    getBreed(breedId);
    getImages(breedId);
  };

  useEffect(() => {
    getBreeds();
  }, [getBreeds]);

  return (
    <div className="flex flex-col gap-10 text-center justify-between bg-blue-200">
      <section className="flex">
        <img className="h-auto max-w-full" src={bg} alt="Cat" />

        <form className="flex flex-col mx-auto p-2">
          <h2 className="font-bold text-2xl">Select breed</h2>
          <select
            onChange={(e) => handleBreed(e.target.value)}
            value={selectedBreed}
            className="select"
            disabled={loadingBreeds}
          >
            <option value="" disabled hidden>
              {loadingBreeds ? "Loading breeds..." : "Select a breed"}
            </option>
            {breeds.map((breedOption, index) => (
              <option value={breedOption.id} key={index}>
                {breedOption.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <hr className="hr"></hr>

      <section className="flex flex-col gap-8 items-center text-center justify-center">
        <h1 className="text-4xl font-bold">{breed.name}</h1>
        {Object.keys(breed).length > 0 && (
          <div className="flex justify-center items-center text-center">
            <Card className="mb-5 w-1/3">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  <h4 className="text-xl mb-5">{breed.temperament}</h4>
                </Typography>
                <Typography>
                  <p className="mb-5">{breed.description}</p>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>
                  <a
                    href={
                      breed.vetstreet_url ||
                      breed.vcahospitals_url ||
                      breed.wikipedia_url
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </section>

      <section className="flex flex-col items-center text-center">
        {loadingImages ? (
          "Loading images..."
        ) : (
          <div
            className="rounded-xl mx-auto flex flex-col items-center justify-center flex-wrap overflow-hidden"
            swipe={true}
          >
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  className="object-cover w-100 h-100 rounded-xl"
                  src={image.url}
                  alt={`cat-${index}`}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
