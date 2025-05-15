import React, { useState, useEffect } from "react";

const initialTime = 25 * 24 * 60 * 60 + 10 * 60 * 60 + 15 * 60 + 9;

function SummerSaleBanner() {
  const [secondsLeft, setSecondsLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const timeLeft = formatTime(secondsLeft);

  return (
    <div className="px-40 py-2">
      <div className="bg-[#a0d3e5] rounded-md p-6 py-20 flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="relative w-full md:w-auto flex justify-center md:justify-start">
          <div className="absolute left-0 top-0 bg-[#f4efa6] w-24 h-24 rounded-full flex items-center justify-center text-green-800 font-semibold text-sm rotate-[10deg]">
            <div className="text-center">
              SALE
              <br />$
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/2 z-10 text-center mx-auto">
          <h2 className="text-xl font-semibold mb-2">Summer Season Sale</h2>
          <p className="text-sm text-gray-700 mb-4">
            Upto 60% off on selected products
          </p>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold mb-4">
            Shop Now
          </button>

          <div className="flex justify-center gap-3 mt-2">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f4efa6] rounded-md px-3 py-2 text-center min-w-[50px]"
              >
                <div className="text-lg font-bold text-green-900">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-full md:w-1/3">
          <img
            src=""
            alt="Model"
            className="rounded-xl object-contain h-[250px] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SummerSaleBanner;
