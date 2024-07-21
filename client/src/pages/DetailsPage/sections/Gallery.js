import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="container">
      <h2 className="text-xl font-semibold mb-4">Other photos</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image.url} // Adjust according to your image object structure
              alt={`Cat ${index + 1}`}
              className="rounded-2xl w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
