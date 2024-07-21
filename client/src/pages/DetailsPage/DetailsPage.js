import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatService from "../../API/CatService";
import Info from "./sections/Info";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Gallery from "./sections/Gallery";

const Details = () => {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const breedData = await CatService.getBreedById(breedId);
      if (!breedData.error) {
        setBreed(breedData);
        console.log(breedData);

        const imagesData = await CatService.getImagesByBreedId(breedId);
        if (!imagesData.error) {
          setImages(imagesData);
        }
      }
    };

    fetchData();
  }, [breedId]);

  if (!breed) return <div>Loading...</div>; // Handle loading state

  return (
    <div>
      <Header />
      <Info breed={breed} />
      <Gallery images={images} />
      <Footer />
    </div>
  );
};

export default Details;
