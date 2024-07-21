import React, { useState, useEffect } from "react";

const Info = ({ breed }) => {
  // Destructure the breed object
  const {
    name,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
    wikipedia_url,
    reference_image_id, // Assuming this is an ID for fetching the large image
  } = breed;

  // Placeholder for large image URL
  const largeImageUrl = `http://localhost:5000/api/breeds/images/${reference_image_id}`;

  // State to manage image loading
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    if (reference_image_id) {
      const img = new Image();
      img.src = largeImageUrl;
      img.onload = () => {
        setImgSrc(largeImageUrl);
        setLoading(false);
      };
      img.onerror = () => {
        console.error("Failed to load image:", largeImageUrl);
        setImgSrc("https://placehold.co/370x370"); // Fallback in case of error
        setLoading(false);
      };
    } else {
      setLoading(false);
    }
  }, [reference_image_id]);

  // Create an array of characteristics
  const characteristics = [
    { label: "Adaptability:", value: adaptability },
    { label: "Affection level:", value: affection_level },
    { label: "Child Friendly:", value: child_friendly },
    { label: "Grooming:", value: grooming },
    { label: "Intelligence:", value: intelligence },
    { label: "Health issues:", value: health_issues },
    { label: "Social needs:", value: social_needs },
    { label: "Stranger friendly:", value: stranger_friendly },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between my-16">
      <div className="flex items-center justify-center md:justify-start mb-8 md:mb-0">
        <div
          className={`w-full max-w-[370px] h-[370px] ${
            loading ? "bg-gray-300" : ""
          }`}
          style={{ position: "relative" }}
        >
          {loading && !imgSrc ? (
            <div className="w-full h-full bg-gray-300 rounded-xl"></div>
          ) : (
            <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">
              <img
                src={imgSrc}
                className="block border-2 border-black rounded-xl w-full h-full object-cover"
                alt={name}
              />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <p className="w-full font-medium mb-4">{description}</p>
        <p className="mb-2">
          <span className="font-bold">Temperament:</span> {temperament}
        </p>
        <p className="mb-2">
          <span className="font-bold">Origin:</span> {origin}
        </p>
        <p className="mb-2">
          <span className="font-bold">Life Span:</span> {life_span}
        </p>
        {characteristics
          .filter(({ value }) => value > 0) // Only include characteristics with value > 0
          .map(({ label, value }, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p className="font-bold">{label}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full w-8 h-2 ${
                      i < value ? "bg-[#544439]" : "bg-[#E0E0E0]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Info;
