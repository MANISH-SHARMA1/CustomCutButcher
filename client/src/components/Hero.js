import React from "react";
import heroImg from "../assets/Hero.jpeg";
function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        height: "80vh",
      }}
      className="bg-cover bg-no-repeat"
    >
      <div className="flex flex-col text-center gap-5 text-white font-semibold pt-24">
        <p className="text-3xl sm:text-4xl md:text-6xl ">Custom Cut Butcher</p>
        <p className="text-lg sm:text-xl md:text-2xl">
          redefining the butcher shop experience
        </p>
        <div className="flex justify-center">
          <button className="text-green-900 bg-white px-5 py-1 rounded mb-60 mt-16 hover:bg-green-900 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
