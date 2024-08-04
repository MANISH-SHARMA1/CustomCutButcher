import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";

function Cart({ onClose }) {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 400); // Delay onClose to allow animation to finish
  };

  return (
    <div
      className={`fixed inset-0 flex justify-end z-50 ${
        isClosing ? "animate-slideOut" : "animate-slideIn"
      }`}
    >
      <div className="absolute inset-0" onClick={handleCloseClick}></div>
      <div className="relative h-screen w-80 text-green-900 bg-white">
        <div className="h-14 flex items-center justify-between p-2 border-b-2 border-green-900 font-semibold">
          <h3>Shopping Cart</h3>
          <div className="cursor-pointer" onClick={handleCloseClick}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="h-full overflow-y-scroll hideScrollbar">
          <div className="h-max">
            {isCartEmpty && (
              <div className="flex flex-col items-center gap-2 m-5">
                <BsCartX className="text-5xl" />
                <h4 className="font-semibold">Cart is Empty</h4>
              </div>
            )}
            {!isCartEmpty && (
              <>
                <div>
                  {/* {cart.map((product, idx) => (
                    <CartItem item={product} key={idx} />
                  ))} */}
                </div>
                <div className="px-2 py-5 font-semibold mb-14">
                  <div className="flex items-center justify-between text-lg">
                    <p>Total:</p>
                    <p>₹ totalAmount</p>
                  </div>
                  <div
                    className="text-center text-blue-900 m-2 border-2 rounded border-blue-900 cursor-pointer"
                    // onClick={handleOrder}
                  >
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
