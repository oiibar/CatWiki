import React from "react";

const Info = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between my-16">
      <div className="flex items-start justify-between md:px-28 mb-8 md:mb-0">
        <img
          src="https://placehold.co/370x370"
          className="block border-2 border-black rounded-xl w-full md:w-auto"
          alt="Cat"
        />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-2xl font-bold">Bengal</h1>
        <p className="w-full font-medium">
          Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.
        </p>
        <p>
          <span className="font-bold">Temperament</span> Alert, Agile,
          Energetic, Demanding, Intelligent
        </p>
        <p>
          <span className="font-bold">Origin:</span> United States
        </p>
        <p>
          <span className="font-bold">Life Span:</span> 12 - 15 years
        </p>
        {[
          ["Adaptability:", 4],
          ["Affection level:", 2],
          ["Child Friendly:", 3],
          ["Grooming:", 5],
          ["Intelligence:", 5],
          ["Health issues:", 5],
          ["Social needs:", 4],
          ["Stranger friendly:", 3],
        ].map(([label, value], index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="font-bold">{label}</p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-2xl w-12 h-2 ${
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
