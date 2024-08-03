import React from "react";
import { useParams } from "react-router-dom";
import useBreedDetails from "./hooks/useBreedDetails";
import Info from "./sections/Info";
import Gallery from "./sections/Gallery";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";

const Details = () => {
  const { breedId } = useParams();
  const { breed, images, loading, error } = useBreedDetails(breedId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error || !breed) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-4xl font-bold">
          {error
            ? "Failed to load breed details"
            : "No breed details available"}
        </div>
      </div>
    );
  }

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
