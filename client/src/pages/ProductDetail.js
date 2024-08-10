import React, { useState } from "react";
import productImg from "../customCut/t-bone.webp";

function ProductDetail() {
  const price = 21;
  const [overview, setOverview] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex justify-center items-center tracking-wider py-20 px-4 sm:px-10 md:px-20 lg:px-28">
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl lg:h-screen shadow-2xl shadow-black p-4 md:p-6 rounded-3xl">
        {/* LEFT PART */}
        <img
          src={productImg}
          alt="T-Bone Steak"
          className="rounded-xl w-full h-auto object-cover"
        />

        {/* RIGHT PART */}
        <div className="w-full h-full lg:px-4">
          <p className="text-xl sm:text-2xl md:text-3xl">
            Grain Finished - T-Bone - 21 Days Dry-aged
          </p>
          <div className="flex justify-between items-center my-5">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Price</p>
              <p className="text-lg font-semibold">
                $ {price}
                <span className="text-gray-700 font-normal text-xs">USD</span>
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="quantity" className="text-sm">
                Quantity
              </label>
              <div className="flex items-center">
                <p
                  className="w-8 text-center border border-gray-700 cursor-pointer"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))} // Prevent negative quantities
                >
                  -
                </p>
                <input
                  className="w-8 text-center border-y border-gray-700 focus:outline-none"
                  type="text"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <p
                  className="w-8 text-center border border-gray-700 cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Total</p>
              <p className="text-lg font-semibold">
                $ {price * quantity}{" "}
                <span className="text-gray-700 font-normal text-xs">USD</span>
              </p>
            </div>
            <button className="bg-white text-gray-700 border border-gray-700 text-xs md:text-sm p-2 md:px-3 md:py-1 rounded-3xl">
              Add To Cart
            </button>
          </div>

          <div className="flex justify-around sm:grid sm:gap-1 sm:text-left sm:grid-cols-2 my-5">
            <p
              className={`cursor-pointer text-sm md:text-base  ${
                !overview ? "text-orange-700" : "text-gray-700"
              }`}
              onClick={() => setOverview(false)}
            >
              DESCRIPTION
            </p>
            <p
              className={`cursor-pointer text-sm md:text-base  ${
                overview ? "text-orange-700" : "text-gray-700"
              }`}
              onClick={() => setOverview(true)}
            >
              DETAILS
            </p>
          </div>

          <div className="overflow-y-scroll hideScrollbar h-44 lg:h-56 text-gray-700 text-xs md:text-sm">
            {!overview && (
              <ul>
                <li>
                  The price displayed is only an estimate. Use the code DEPOSIT
                  to pre-pay 50% of your order. You'll pay the remaining balance
                  of the final weight in store.
                </li>
                <li className="my-3">
                  Please allow us 24 hours to prepare your order. All deposits
                  are non-refundable.
                </li>
                <li>All orders are cut to our best estimate.</li>
              </ul>
            )}

            {overview && (
              <ul>
                <li>Unseasoned: $21.99/lb, Seasoned: $22.99/lb.</li>
                <li className="my-3">Grade Choice.</li>
                <li>
                  Grass Fed Grain Finished Black Angus, Non-GMO, No Antibiotics,
                  No Added Hormones.
                </li>
                <li className="my-3">
                  The Classic Seasoning includes Salt, Black Pepper, Olive Oil,
                  Thyme, and slices of Garlic.
                </li>
                <li>
                  One 1" Steak weighs approximately between 1 lb and 1.25 lb.
                </li>
                <li className="my-3">
                  Though slightly different from the Porterhouse, with its
                  smaller Filet Mignon, it is still considerably comparable for
                  its tender and flavor.
                </li>
                <li>
                  A perfect steak for grilling or cooking on the stovetop.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
