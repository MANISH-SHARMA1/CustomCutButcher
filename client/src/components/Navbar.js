import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from "../assets/customCut2.png";
import Cart from "./Cart";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const cart = useSelector((state) => state.cartSlice.cart);
  const navigate = useNavigate();

  let totalItems = 0;
  cart.forEach((item) => (totalItems += item.dish.quantity));

  return (
    <>
      <div>
        <div className="fixed w-full z-50 border-b border-black">
          <div className="flex justify-between items-center bg-white py-5 md:py-0 px-4">
            {/* LEFT PART */}
            <div className="flex-1 flex items-center">
              {/* hamburger */}
              <div className="md:hidden cursor-pointer sm:text-xl md:text-2xl">
                <RxHamburgerMenu onClick={() => setOpenSidebar(!openSidebar)} />
              </div>

              {/* image */}
              <div className="hidden md:block">
                <img
                  src={icon}
                  alt="Logo"
                  className="cursor-pointer size-16"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>

            {/* CENTER */}
            <div className="sm:flex-1 flex justify-center">
              <p
                className="text-lg sm:text-lg md:text-xl lg:text-3xl text-black cursor-pointer"
                onClick={() => navigate("/")}
              >
                Custom Cut Butcher
              </p>
            </div>

            {/* RIGHT PART */}
            <div className="flex-1 flex justify-end items-center gap-5">
              <div className="hidden md:flex gap-4 md:gap-5 items-center">
                <IoSearch
                  className="text-3xl py-1 cursor-pointer"
                  onClick={() => navigate("/search")}
                />
                <button
                  onClick={() => navigate("/contact")}
                  className="border-2 border-black text-sm px-3 py-1"
                >
                  CONTACT
                </button>
              </div>
              <div className="relative">
                <IoCartOutline
                  className="cursor-pointer text-xl md:text-2xl"
                  onClick={() => setOpenCart(!openCart)}
                />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {openCart && <Cart onClose={() => setOpenCart(false)} />}
        {openSidebar && <Sidebar onClose={() => setOpenSidebar(false)} />}
      </div>
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Navbar;
