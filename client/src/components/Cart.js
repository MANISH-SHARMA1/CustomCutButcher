import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const cart = useSelector((state) => state.cartSlice.cart);

  let totalAmount = 0;
  cart.forEach(
    (item) => (totalAmount += item.dish.quantity * item.dish.product.price)
  );
  const isCartEmpty = cart.length === 0;

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 400); // Delay onClose to allow animation to finish
  };

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-50"
        }`}
        onClick={handleCloseClick}
      ></div>
      <div
        className={`relative h-screen w-60 sm:w-80 bg-white text-sm md:text-base lg:text-lg transition-transform duration-300 ${
          isClosing ? "animate-slideOut" : "animate-slideIn"
        }`}
      >
        <div className="h-14 flex items-center justify-between p-2 font-medium border-b border-black">
          <p>Shopping Cart</p>
          <div className="cursor-pointer" onClick={handleCloseClick}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="h-full overflow-y-scroll hideScrollbar">
          <div className="h-max">
            {isCartEmpty && (
              <div className="flex flex-col items-center gap-2 m-5 text-gray-700">
                <BsCartX className="text-3xl md:text-4xl lg:text-5xl" />
                <p className="">Cart is Empty</p>
              </div>
            )}
            {!isCartEmpty && (
              <>
                <div>
                  {cart.map((product, idx) => (
                    <CartItem item={product} key={idx} />
                  ))}
                </div>
                <div className="px-2 py-4 font-medium mb-14">
                  <div className="flex items-center justify-between text-base">
                    <p>Total:</p>
                    <p className="font-semibold">${totalAmount}</p>
                  </div>
                  <div className="text-center m-2 border-2 rounded border-black cursor-pointer">
                    Order Now!
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
