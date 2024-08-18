import React, { useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Offerings from "../components/Offerings";
import ribeySteak from "../customCut/bonelessribeyegrass.webp";
import tBoneSteak from "../customCut/t-bone.webp";
import porkBelly from "../customCut/Porkbellyshabu.webp";
import lambChops from "../customCut/lambchop.webp";
import wholeChicken from "../customCut/whole_chicken.webp";
import groundBeef from "../customCut/Groundbeef.webp";
import sausages from "../customCut/sausage.webp";
import Signup from "../components/Signup";
import buffalo from "../assets/horn.png";
import lamb from "../assets/sheep.png";
import pork from "../assets/animal.png";
import poultry from "../assets/hen.png";
import goat from "../assets/ewe.png";
import buffalo2 from "../assets/horn (1).png";
import lamb2 from "../assets/sheep (1).png";
import pork2 from "../assets/animal (1).png";
import poultry2 from "../assets/hen (1).png";
import goat2 from "../assets/ewe (1).png";

function Home() {
  const [isHovered, setIsHovered] = useState(null);

  const card = [
    {
      img: ribeySteak,
      name: "Ribey Steak",
      from: 50,
      to: 99,
    },
    {
      img: tBoneSteak,
      name: "T-bone Steak",
      from: 35,
      to: 125,
    },
    {
      img: porkBelly,
      name: "Pork Belly",
      from: 55,
      to: 150,
    },
    {
      img: lambChops,
      name: "Lamb Chops",
      from: 40,
      to: 199,
    },
    {
      img: wholeChicken,
      name: "Whole Chicken",
      from: 10,
      to: 99.99,
    },
    {
      img: groundBeef,
      name: "Ground Beef",
      from: 15,
      to: 143,
    },
    {
      img: sausages,
      name: "Sausages",
      from: 30,
      to: 189,
    },
  ];

  const popularCuts = [
    {
      img1: lamb,
      img2: lamb2,
      name: "Lamb",
    },
    {
      img1: poultry,
      img2: poultry2,
      name: "Poultry",
    },
    {
      img1: pork,
      img2: pork2,
      name: "Pork",
    },
    {
      img1: goat,
      img2: goat2,
      name: "Goat",
    },
    {
      img1: buffalo,
      img2: buffalo2,
      name: "Buffalo",
    },
  ];

  return (
    <>
      <Hero popularCuts={popularCuts} />
      <div style={{ backgroundColor: "white" }}>
        <Signup />
        <Facilities />
        <Offerings />
        {/* POPULAR CUTS */}
        <p className="py-3 text-black text-2xl md:text-3xl text-center">
          Popular Cuts
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-9 sm:gap-24 md:gap-32 w-max">
            {popularCuts.map((cut, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}
                className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-red-600"
              >
                <img
                  src={isHovered === idx ? cut.img2 : cut.img1}
                  alt=""
                  className="size-5 sm:size-6 lg:size-7"
                />
                <p className="text-xs">{cut.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CARD */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5 w-max">
            {card.map((data, idx) => (
              <Card data={data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
