import React from "react";
import CollectionCards from "./CollectionCards";

function Collections() {
  const cards = [
    {
      src: "/images/col/ayurveda.png",
      title: "Ayurveda",
    },
    {
      src: "/images/col/beauty.png",
      title: "Beauty essential",
    },
    {
      src: "/public/images/col/health.png",
      title: "Health & Fitness",
    },
    {
      src: "/images/col/herbs.png",
      title: "Herbs",
    },
    {
      src: "/images/col/Saffron.png",
      title: "Saffron",
    },
    {
      src: "/images/col/natural.png",
      title: "Natural Nutrition",
    },
  ];
  return (
    <>
      <div
        className="flex justify-center flex-col px-40 py-10"
        style={{ backgroundColor: "beige" }}
      >
        <span className="text-[1.7rem] font-semibold">
          Explore Our Collection
        </span>
        <div className="flex justify-center gap-10">
          {cards.map((card, index) => (
            <CollectionCards key={index} data={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections;
