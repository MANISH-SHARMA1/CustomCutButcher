import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Sidebar({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 400); // Delay onClose to allow animation to finish
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-start">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-50"
        }`}
        onClick={handleCloseClick}
      ></div>
      <div
        className={`relative h-screen w-60 sm:w-80 bg-white text-lg transition-transform duration-300 ${
          isClosing ? "animate-sidebarSlideOut" : "animate-sidebarSlideIn"
        }`}
      >
        <div className="h-14 flex items-center justify-between p-2 font-semibold">
          <IoSearch
            className="cursor-pointer"
            onClick={() => navigate("/search")}
          />
          <div className="cursor-pointer" onClick={handleCloseClick}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="flex flex-col">
          <p
            onClick={() => navigate("/")}
            className="border-y border-black py-2 pl-4 cursor-pointer"
          >
            Home
          </p>
          <button
            className="border-2 border-black m-5 font-semibold"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
