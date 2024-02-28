import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState({});
  const [images, setImages] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(""); // Added state to track selected breed

  const getBreeds = () => {
    axios
      .get(`http://localhost:5000/api/breeds`)
      .then((res) => setBreeds(res.data))
      .catch((error) => console.log("Error fetching breeds:", error));
  };

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

  const handleBreed = (breedId) => {
    setSelectedBreed(breedId);
    getBreed(breedId);
    getImages(breedId);
  };

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div>
      <select
        onChange={(e) => handleBreed(e.target.value)}
        value={selectedBreed}
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
      <p>{breed.name}</p>
      {images.map((image, index) => (
        <img src={image.url} alt="cat" key={index} />
      ))}
    </div>
  );
}

export default App;
