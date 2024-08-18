import React, { useEffect, useState } from "react";
import heroImg from "../customCut/image_1.jpg";
import { useNavigate } from "react-router-dom";

function Hero({ popularCuts }) {
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden -mt-20">
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          height: "100vh",
        }}
        className="fixed top-0 left-0 w-full bg-cover bg-center -z-10"
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <p className="text-4xl lg:text-5xl">Custom Cut Butcher</p>
        <p className="text-lg lg:text-xl mt-2">
          redefining the butcher shop experience
        </p>
        <button className="text-cyan-950 font-semibold bg-white px-5 py-1 rounded mt-8 sm:mt-14 hover:opacity-90">
          Order Now
        </button>
      </div>

      {/* BOTTOM PART */}
      <div className="absolute bottom-0 w-full  text-white text-sm text-center z-10">
        <div className="flex justify-center bg-white ">
          <div className="grid grid-cols-5 gap-9 sm:gap-24 md:gap-32 w-max py-2">
            {popularCuts.map((cut, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => navigate(`/dishes/${cut.name}`)}
                className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-red-600"
              >
                <img
                  src={isHovered === idx ? cut.img2 : cut.img1}
                  alt=""
                  className="size-3 sm:size-4 lg:size-5"
                />
                <p className="text-xs">{cut.name}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="py-2 bg-black">
          670 C River Oaks Pkwy, San Jose, CA 95134 | (408) 331-4020
        </p>
      </div>
    </div>
  );
}

export default Hero;
