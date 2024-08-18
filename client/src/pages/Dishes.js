import React from "react";
import ribeySteak from "../customCut/bonelessribeyegrass.webp";
import tBoneSteak from "../customCut/t-bone.webp";
import porkBelly from "../customCut/Porkbellyshabu.webp";
import lambChops from "../customCut/lambchop.webp";
import wholeChicken from "../customCut/whole_chicken.webp";
import groundBeef from "../customCut/Groundbeef.webp";
import sausages from "../customCut/sausage.webp";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

function Dishes() {
  const params = useParams();
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
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-2xl">{params.id} Dishes</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5 w-max">
        {card.map((data, idx) => (
          <Card data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Dishes;
