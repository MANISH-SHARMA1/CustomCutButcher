import React, { useEffect, useState } from "react";
import productImg from "../customCut/t-bone.webp";
import { VscLocation, VscPackage } from "react-icons/vsc";
import { RiArrowDropDownLine, RiShare2Line } from "react-icons/ri";

function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const faq = [
    {
      icon: <VscLocation className="text-2xl" />,
      name: "Pick-up Guideline",
      dropdown: <RiArrowDropDownLine />,
      desc: "For the moment, all orders are for pick-up at the shop only",
    },
    {
      icon: <VscPackage className="text-xl" />,
      name: "The Packaging",
      dropdown: <RiArrowDropDownLine />,
      desc: 'Every vacuum seal every item. Every bag is BPA-Free as well as FDA and USDA-Compliant. You can also use our bags to directly sous-vide and freeze your order. Except if your order is seasoned or marinated, if you would like your order to be wrapped in Butcher Paper, you can specify it at checkout in the "Special Instructions Box" ',
    },
  ];

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open item
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="tracking-wider pt-16 md:pt-14 md:pb-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 max-w-7xl p-4 md:p-6">
        {/* LEFT PART */}
        <img
          src={productImg}
          alt="T-Bone Steak"
          className="w-full h-auto object-cover"
        />

        {/* RIGHT PART */}
        <div className="w-full h-full space-y-5 lg:px-4 overflow-y-scroll hideScrollbar">
          <p className="text-xl sm:text-2xl md:text-3xl">
            Grain Finished - T-Bone - 21 Days Dry-aged
          </p>
          <p>
            From <span className="text-lg font-semibold">$35 </span>to{" "}
            <span className="text-lg font-semibold">$125 </span>
          </p>
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

          <button className=" text-white bg-gray-800 w-full text-xs md:text-sm p-2">
            Add To Cart
          </button>

          <ul className="list-disc text-sm font-semibold text-red-700 pl-3 space-y-3">
            <li>
              The price displayed is only an estimate. Use the code DEPOSIT to
              pre-pay 50% of your order. You'll pay the remaining balance of the
              final weight in store.
            </li>
            <li>
              Please allow us 24 hours to prepare your order. All deposits are
              non-refundable.
            </li>
            <li>All orders are cut to our best estimate.</li>
          </ul>

          <ul className="list-disc text-sm text-gray-700 pl-3 space-y-3">
            <li>Unseasoned: $21.99/lb, Seasoned: $22.99/lb.</li>
            <li>Grade Choice.</li>
            <li>
              Grass Fed Grain Finished Black Angus, Non-GMO, No Antibiotics, No
              Added Hormones.
            </li>
            <li>
              The Classic Seasoning includes Salt, Black Pepper, Olive Oil,
              Thyme, and slices of Garlic.
            </li>
            <li>One 1" Steak weighs approximately between 1 lb and 1.25 lb.</li>
            <li>
              Though slightly different from the Porterhouse, with its smaller
              Filet Mignon, it is still considerably comparable for its tender
              and flavor.
            </li>
            <li>A perfect steak for grilling or cooking on the stovetop.</li>
          </ul>

          <div className="divide-y text-sm font-semibold">
            {faq.map((data, idx) => (
              <div className="py-4" key={idx}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(idx)}
                >
                  <p className="flex items-center gap-3">
                    {data.icon} {data.name}
                  </p>
                  <p
                    className={`transform transition-transform duration-300 text-2xl ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    {data.dropdown}
                  </p>
                </div>
                {/* ANSWER */}
                {openIndex === idx && (
                  <p className={`px-2 font-normal text-sm `}>
                    {data.desc.split(". ").map((sentence, index) => (
                      <p className="my-2" key={index}>
                        {sentence}.
                      </p>
                    ))}
                  </p>
                )}
              </div>
            ))}
            <p className="pt-3 text-xs flex items-center gap-3 font-normal">
              <RiShare2Line className="text-xl underline" /> Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
