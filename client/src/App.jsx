import React, { useEffect, useState } from "react";
import axios from "axios";
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
    <div className="flex flex-col gap-10 text-center justify-between bg-blue-200">
      <section className="flex">
        <img className="h-auto max-w-full" src={bg} alt="Cat" />

        <form className="flex flex-col mx-auto p-2">
          <h2 className="font-bold text-2xl">Select breed</h2>
          <select
            onChange={(e) => handleBreed(e.target.value)}
            value={selectedBreed}
            class="select"
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
        {!images.length === 5 ? (
          "Loading"
        ) : (
          <div
            className="rounded-xl mx-auto flex flex-col items-center justify-center flex-wrap overflow-hidden"
            swipe={true}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="object-cover w-100 h-100 rounded-xl"
                src={image.url}
                alt={`cat-${index}`}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
