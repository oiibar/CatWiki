import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Other photos</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
        </div>
        <div className="flex gap-4 justify-between">
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
          <img
            src="https://placehold.co/278x278"
            alt="Cat"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
