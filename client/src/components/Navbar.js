import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <div className="bg-green-900 flex justify-around items-center py-2">
        <div className="md:flex hidden gap-5 items-center text-white text-sm">
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link>ABOUT US</Link>
          </div>
          <div>
            <Link>PRODUCTS</Link>
          </div>
          <div>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="flex items-center bg-white rounded px-1 text-green-900">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none w-20 sm:w-max "
          />
          <IoSearch className="text-2xl py-1 cursor-pointer" />
        </div>
        <div className="md:hidden text-white cursor-pointer">
          <RxHamburgerMenu onClick={() => handleToggle()} />
        </div>
      </div>
      <div
        className={`${
          toggle ? "block md:hidden" : "hidden"
        } text-center bg-green-900 text-white text-sm`}
      >
        <div className="py-1">
          <Link to="/">HOME</Link>
        </div>
        <div className="py-1">
          <Link>ABOUT US</Link>
        </div>
        <div className="py-1">
          <Link>PRODUCTS</Link>
        </div>
        <div className="py-1">
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
