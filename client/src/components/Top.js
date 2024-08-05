import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

function Top() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center text-green-700 ">
        <p className="flex-1"></p>
        <div className="flex-1 flex justify-center py-1">
          
        </div>
        <div className="flex-1 flex justify-center items-center gap-3 sm:gap-5 text-xl">
         
          <IoMdLogIn className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Top;
