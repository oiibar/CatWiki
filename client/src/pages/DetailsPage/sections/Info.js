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
    <section className="container flex flex-col gap-10 lg:flex-row justify-between">
      <div className="mx-auto">
        <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">
          <img
            src="https://placehold.co/370x370"
            className="block border-2 border-black"
            alt="Breed Name"
          />
        </a>
      </div>
      <div className="flex flex-col gap-10 w-full md:w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p>{description}</p>
          <p>
            <span className="font-semibold">Temperament:</span> {temperament}
          </p>
          <p>
            <span className="font-semibold">Origin:</span> {origin}
          </p>
          <p>
            <span className="font-semibold">Life Span:</span> {life_span}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {characteristics
            .filter(({ value }) => value > 0) // Only include characteristics with value > 0
            .map(({ label, value }, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="font-semibold">{label}</p>
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
      </div>
    </section>
  );
};

export default Info;
