import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import { MoveLeft, MoveRight } from "lucide-react";

const images = [
  {
    src: "/images/1.png",
    alt: "Banner 1",
    bgColor: "bg-[#EF6F20]",
  },
  {
    src: "/images/2.png",
    alt: "Banner 2",
    bgColor: "bg-red-700",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const indicators = useMemo(
    () =>
      images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className={`h-[2px] rounded-full transition-all duration-300 w-[6rem] ${
            idx === currentIndex ? " bg-[#06392D]" : "bg-white/40"
          }`}
        />
      )),
    [currentIndex]
  );

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.9,
          }}
          transition={{ duration: 1 }}
          style={{ zIndex: index === currentIndex ? 10 : 0 }}
        >
          <div className={`absolute inset-0 ${image.bgColor}`} />
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <button
              className={`text-white font-medium px-6 py-3 rounded-xl ${
                index === 0
                  ? "ml-[-38rem] mt-56 bg-[#EF6F20]"
                  : "ml-[55rem] mt-48 bg-red-700"
              }`}
            >
              Shop Now
            </button>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center items-center gap-6">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-[#06392D] text-white p-2 hover:bg-black"
        >
          <MoveLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-4">{indicators}</div>

        <button
          onClick={goToNext}
          className="rounded-full bg-[#06392D] text-white p-2 hover:bg-black"
        >
          <MoveRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
