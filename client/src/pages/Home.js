import React from "react";
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

function Home() {
  const card = [
    {
      img: ribeySteak,
      name: "Ribey Steak",
      price: 50,
    },
    {
      img: tBoneSteak,
      name: "T-bone Steak",
      price: 35,
    },
    {
      img: porkBelly,
      name: "Pork Belly",
      price: 55,
    },
    {
      img: lambChops,
      name: "Lamb Chops",
      price: 40,
    },
    {
      img: wholeChicken,
      name: "Whole Chicken",
      price: 10,
    },
    {
      img: groundBeef,
      name: "Ground Beef",
      price: 15,
    },
    {
      img: sausages,
      name: "Sausages",
      price: 30,
    },
  ];

  return (
    <div>
      <Hero />
      <div className="bg-white">
        <Signup />
        <Facilities />
        <Offerings />
        <p className="pt-3 text-black font-semibold text-2xl md:text-3xl text-center">
          Popular Cuts
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 w-max">
            {card.map((data, idx) => (
              <Card data={data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
