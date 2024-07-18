import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 mb-28">
      <h2 className="text-xl font-semibold">Other photos</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {[...Array(8)].map((_, index) => (
          <img
            key={index}
            src={`https://placehold.co/278x278?text=Cat+${index + 1}`}
            alt={`Cat ${index + 1}`}
            className="rounded-2xl w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
