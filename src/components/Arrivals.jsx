import ArrivalCards from "./ArrivalCards";

function Arrivals() {
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
  ];
  return (
    <>
      <div className="flex justify-center flex-col px-40 py-14">
        <span className="text-[1.7rem] font-semibold">Our New Arrivals</span>
        <div className="flex justify-center gap-2">
          {cards.map((card, index) => (
            <ArrivalCards key={index} data={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Arrivals;
