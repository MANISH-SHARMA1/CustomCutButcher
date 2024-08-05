import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
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
          isClosing ? 'opacity-0' : 'opacity-50'
        }`}
        onClick={handleCloseClick}
      ></div>
      <div
        className={`relative h-screen w-80 bg-white text-green-900 text-lg transition-transform duration-300 ${
          isClosing ? 'animate-sidebarSlideOut' : 'animate-sidebarSlideIn'
        }`}
      >
        <AiOutlineClose
          className="absolute top-4 right-4 text-2xl text-green-900 font-semibold cursor-pointer"
          onClick={handleCloseClick}
        />
        <div className="flex flex-col mt-12 ">
          <p
            onClick={() => navigate("/")}
            className="border-y border-green-900 py-2 pl-4 cursor-pointer"
          >
            Home
          </p>
          <button
            className="border-2 border-green-900 m-5 font-semibold"
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
