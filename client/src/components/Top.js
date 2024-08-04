import React, { useState } from "react";
import icon from "../assets/customCut.png";
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

function Top() {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <div className="flex items-center text-green-700 ">
        <p className="flex-1"></p>
        <div className="flex-1 flex justify-center py-1">
          <img
            src={icon}
            alt=""
            className="w-36 h-20"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex-1 flex justify-center items-center gap-3 sm:gap-5 text-xl">
          <IoCartOutline
            className="cursor-pointer"
            onClick={() => setOpenCart(!openCart)}
          />
          <IoMdLogIn className="cursor-pointer" />
        </div>
      </div>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}

export default Top;
