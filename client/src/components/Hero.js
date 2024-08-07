import React from "react";
import heroImg from "../customCut/image_1.jpg";

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-semibold z-10">
        <p className="text-5xl">Custom Cut Butcher</p>
        <p className="text-xl mt-2">redefining the butcher shop experience</p>
        <button className="text-cyan-950 font-semibold bg-white px-5 py-1 rounded mt-8 sm:mt-14 hover:opacity-90">
          Buy Now
        </button>
      </div>
      <div className="absolute bottom-0 w-full bg-black text-white text-sm text-center py-2 z-10">
        <p>670 C River Oaks Pkwy, San Jose, CA 95134 | (408) 331-4020</p>
      </div>
    </div>
  );
}

export default Hero;
