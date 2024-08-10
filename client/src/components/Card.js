import React from "react";

function Card({ data }) {
  return (
    <div className="text-black my-5 w-48 md:w-60 shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <img
        src={data.img}
        alt="Product"
        className="h-52 lg:h-56 w-full object-cover rounded-t"
      />
      <div className="p-2 text-sm lg:text-base">
        <p className="font-semibold">{data.name}</p>
        <p className="text-gray-600">1kg - 1.2kg</p>
        <p className="my-1 text-gray-600">
          from <span className="font-semibold text-black">${data.from} </span>
          to <span className="font-semibold text-black">${data.to}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
