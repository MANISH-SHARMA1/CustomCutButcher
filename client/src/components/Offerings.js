import React, { useState } from "react";
import meats from "../customCut/raw-red-meat-lays-in-a-wooden-cutting-board.jpg";
import spices from "../customCut/spicesOriginal.jpg";
import herbs from "../customCut/rosemary-on-slate.jpg";
import { BsDot } from "react-icons/bs";

function Offerings() {
  const items = [
    { image: meats, title: "Meats" },
    { image: spices, title: "Spices" },
    { image: herbs, title: "Herbs" },
  ];

  const [idx, setIdx] = useState(0);

  return (
    <>
      <div className="flex justify-center md:hidden">
        <div className="text-center pt-5">
          <div className="relative aspect-w-1 aspect-h-1">
            <img
              src={items[idx].image}
              alt={`Image ${idx}`}
              className="relative h-52 w-44 rounded"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              <p>{items[idx].title}</p>
            </div>
          </div>

          <div className="flex items-center justify-center text-2xl">
            {items.map((data, idx) => (
              <p onClick={() => setIdx(idx)} className="cursor-pointer">
                <BsDot />
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 p-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative aspect-w-1 aspect-h-1 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Offerings;
