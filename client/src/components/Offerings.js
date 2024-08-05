import React from "react";
import meats from "../customCut/raw-red-meat-lays-in-a-wooden-cutting-board.jpg";
import spices from "../customCut/spicesOriginal.jpg";
import herbs from "../customCut/rosemary-on-slate.jpg";

function Offerings() {
  const items = [
    { image: meats, title: "Meats" },
    { image: spices, title: "Spices" },
    { image: herbs, title: "Herbs" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative h-screen bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            <p className="text-lg font-semibold">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offerings;