import React from "react";
import butcherSlice from "../assets/butcherSlice.jpg";

function Card() {
  return (
    <div className="text-green-900 my-5 border border-green-900 rounded ">
      <img src={butcherSlice} alt="" className="h-36 w-48 md:size-60 rounded-t" />
      <div className="p-2 font-semibold">
        <p>LambSoap Bean(Frozen)</p>
        <p className="text-red-600 my-1">$ 2.54</p>
        <div className="flex justify-between items-center">
          <select
            name="qty"
            id="qty"
            className="border border-green-900 rounded"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="border border-green-900 px-4 rounded">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
