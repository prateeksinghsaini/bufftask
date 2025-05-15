import React from "react";

function CollectionCards({ data }) {
  return (
    <div className="mt-5 text-center">
      <img src={data.src} className="h-[30vh] bg-red" />
      {data.title}
    </div>
  );
}

export default CollectionCards;
