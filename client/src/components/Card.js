import React from "react";

function Card({ data }) {
  return (
    <div className="text-green-900 my-5 border border-green-900 rounded w-48 md:w-60 transition-transform transform hover:scale-105 cursor-pointer">
      <img
        src={data.img}
        alt="Product"
        className="h-52 lg:h-56 w-full object-cover rounded-t"
      />
      <div className="p-2 font-semibold">
        <p>{data.name}</p>
        <p className="my-1">From ${data.price}</p>
      </div>
    </div>
  );
}

export default Card;
