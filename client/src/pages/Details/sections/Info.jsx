import React, { useState, useEffect } from "react";

const Info = ({ breed }) => {
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
    reference_image_id,
  } = breed;

  const largeImageUrl = `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`;

  const [imgSrc, setImgSrc] = useState("https://placehold.co/370x370");

  useEffect(() => {
    if (reference_image_id) {
      const img = new Image();
      img.src = largeImageUrl;
      img.onload = () => {
        setImgSrc(largeImageUrl);
      };
      img.onerror = () => {
        console.error("Failed to load image:", largeImageUrl);
        setImgSrc("https://placehold.co/370x370");
      };
    } else {
    }
  }, [largeImageUrl, reference_image_id]);

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
      <div className="mx-auto rounded-2xl w-50 h-50">
        <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            className="block rounded-2xl object-cover"
            alt={name}
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
            .filter(({ value }) => value > 0)
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
