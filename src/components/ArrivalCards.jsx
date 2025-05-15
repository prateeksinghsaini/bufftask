import React from "react";

function ArrivalCards({ data }) {
  return (
    <div className="mt-5 text-center">
      <img src={data.src} className="w-[40vw]" />
      {data.title}
    </div>
  );
}

export default ArrivalCards;
