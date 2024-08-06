import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from "../customCut/customCut3.png";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="fixed w-full z-50 border-b border-green-950">
        <div className="flex justify-between items-center bg-white text-green-900 py-5 md:py-0 px-4">
          <div className="md:hidden cursor-pointer">
            <RxHamburgerMenu onClick={() => setOpenSidebar(!openSidebar)} />
          </div>
          <div className="hidden md:block w-40">
            <img
              src={icon}
              alt="Logo"
              className="cursor-pointer h-full w-full"
              style={{ clipPath: "inset(0 70% 0 0)" }}
              onClick={() => navigate("/")}
            />
          </div>
          <p
            className="block text-2xl text-black font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Custom Cut Butcher
          </p>
          <div className="flex gap-5 items-center">
            <div className="hidden md:flex gap-5 items-center">
              <div className="flex items-center bg-white border border-green-900 px-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:outline-none w-16"
                />
                <IoSearch className="text-2xl py-1 cursor-pointer" />
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="border border-green-900 px-3"
              >
                Contact
              </button>
            </div>
            <IoCartOutline
              className="cursor-pointer text-2xl"
              onClick={() => setOpenCart(!openCart)}
            />
          </div>
        </div>
      </div>

      {openCart && <Cart onClose={() => setOpenCart(false)} />}
      {openSidebar && <Sidebar onClose={() => setOpenSidebar(false)} />}
    </>
  );
}

export default Navbar;
