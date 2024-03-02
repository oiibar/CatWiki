import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import bg from "./assets/bg.png";
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(""); // Added state to track selected breed
  const [breed, setBreed] = useState({});
  const [images, setImages] = useState([]);

  const getBreed = (breedId) => {
    if (breedId) {
      axios
        .get(`http://localhost:5000/api/breeds/${breedId}`)
        .then((res) => setBreed(res.data))
        .catch((error) => console.log("Error fetching breed:", error));
    }
  };
  const getImages = (breedId) => {
    if (breedId) {
      axios
        .get(`http://localhost:5000/api/breeds/images/${breedId}`)
        .then((res) => setImages(res.data))
        .catch((error) => console.log("Error fetching images:", error));
    }
  };
  const getBreeds = () => {
    axios
      .get(`http://localhost:5000/api/breeds`)
      .then((res) => setBreeds(res.data))
      .catch((error) => console.log("Error fetching breeds:", error));
  };
  const handleBreed = (breedId) => {
    setSelectedBreed(breedId);
    getBreed(breedId);
    getImages(breedId);
  };

  useEffect(() => {
    getBreeds();
  }, [breed]);

  return (
    <div className="flex flex-col text-center justify-between">
      <section className="flex mb-28">
        <img className="h-auto max-w-full" src={bg} alt="Cat" />

        <form class="max-w-sm mx-auto">
          <select
            onChange={(e) => handleBreed(e.target.value)}
            value={selectedBreed}
            class="mt-5 bg-gray-50 border border-blue-500 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled hidden>
              Select a breed
            </option>
            {breeds.map((breedOption, index) => (
              <option value={breedOption.id} key={index}>
                {breedOption.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <section className="mb-28 flex flex-col items-center text-center justify-center">
        <h1 className="text-4xl mb-10 font-bold">{breed.name}</h1>
        {Object.keys(breed).length > 0 && (
          <div className="flex justify-center items-center text-center">
            <Card className="mb-5 mr-5 w-1/3">
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
                    href={breed.vetstreet_url || breed.wikipedia_url}
                    target="_blank"
                  >
                    Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </section>

      {/* <section className="flex flex-col items-center text-center">
        {!images.length === 5 ? (
          "Loading"
        ) : (
          <Carousel className="rounded-xl w-5/6 mx-auto flex items-center justify-center">
            {images.map((image, index) => (
              <img
                className="object-cover h-full w-full"
                src={image.url}
                alt="cat"
                key={index}
              />
            ))}
          </Carousel>
        )}
      </section> */}
    </div>
  );
}

export default App;
