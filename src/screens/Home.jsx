import React from "react";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Arrivals from "../components/Arrivals";
import SummerSaleBanner from "../components/SummerSaleBanner";

function Home() {
  return (
    <div className="w-full h-[93vh]">
      <Hero />
      <Collections />
      <Arrivals />
      <SummerSaleBanner />
    </div>
  );
}

export default Home;
