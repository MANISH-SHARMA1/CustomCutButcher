import React from "react";
import buffalo from "../assets/buffalo.png";
import lamb from "../assets/lamb.png";
import pork from "../assets/pork.png";
import hen from "../assets/hen.png";
import goat from "../assets/goat.png";
import pastureRaised from "../assets/pasture.png";
import pesticideFree from "../assets/noPesticide.png";
import noAntibiotics from "../assets/noAntibiotics.png";
import noHormone from "../assets/noHormones.png";

function Range() {
  return (
    <div className="text-green-900  font-semibold">
      <p className="text-lg font-bold mt-2 text-center">EXPLORE THE RANGE</p>
      <div className="overflow-x-auto hideScrollbar mx-2">
        <div className="flex w-max lg:w-full gap-10 md:gap-0 md:justify-around items-center my-2">
          <div className="flex flex-col items-center">
            <div>
              <img
                src={buffalo}
                alt=""
                className="size-24 sm:size-32 md:size-44"
              />
            </div>
            <p>SHOP BEEF NOW</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={lamb} alt="" className="size-24 sm:size-32 md:size-44" />
            <p>LAMB</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={pork} alt="" className="size-24 sm:size-32 md:size-44" />
            <p>PORK</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={hen} alt="" className="size-24 sm:size-32 md:size-44" />
            <p>POLITRY</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={goat} alt="" className="size-24 sm:size-32 md:size-44" />
            <p>GOAT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="my-2 w-52 md:w-96">
          <p className="text-2xl md:text-3xl font-bold">
            Reasons to buy from Custom Cut Butcher
          </p>
          <p className="font-mono my-2">
            Stay up to date with the latest from Custom Cut Butcher
          </p>
          <p className="font-serif">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            ratione vero veniam sed quis ullam, voluptas ipsa ab necessitatibus
            ipsum est pariatur asperiores! Ducimus ipsa dolore quae molestias
            libero pariatur!
          </p>
        </div>
      </div>
      <div className="overflow-x-auto hideScrollbar">
        <div className="flex gap-5 sm:gap-0 sm:justify-around w-max sm:w-full my-5">
          <div className="flex flex-col items-center">
            <img src={pastureRaised} alt="" className="size-24" />
            <p>PASTURE RAISED</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={pesticideFree} alt="" className="size-24" />
            <p>PESTICIDES FREE</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={noAntibiotics} alt="" className="size-24" />
            <p>NO ANTIBIOTICS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={noHormone} alt="" className="size-24" />
            <p>NO HORMONE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range;
