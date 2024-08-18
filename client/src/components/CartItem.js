import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../redux/slices/cartSlice";
import cartImg from "../customCut/t-bone.webp";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const itemDetail = item.dish.product;
  const key = item.dish.product.key;
  const quantity = item.dish.quantity;

  return (
    <div className="flex items-center gap-2 border-b-2 border-blue-900 px-1">
      <div className="w-20 h-20">
        <img
          src={cartImg}
          alt="item.productId.name"
          className="w-full h-full object-contain rounded"
        />
      </div>
      <div className="flex flex-grow justify-between">
        <div className="flex flex-col gap-1 font-semibold">
          <p>{itemDetail.name}</p>
          <p>Price: ${itemDetail.price}</p>
          <div className="border-2 border-blue-900 w-fit">
            <span
              className="py-1 px-3 border-r-2 border-blue-900 inline-block text-xl cursor-pointer font-normal"
              onClick={() => dispatch(removeFromCart(key))}
            >
              -
            </span>
            <span className="text-center w-10 inline-block">{quantity}</span>
            <span
              className="py-1 px-3 border-l-2 border-blue-900 inline-block text-xl cursor-pointer font-normal"
              onClick={() =>
                dispatch(addToCart({ product: itemDetail, quantity }))
              }
            >
              +
            </span>
          </div>
          <p className="my-1">SubTotal: ${itemDetail.price * quantity}</p>
        </div>
        <div
          className="cursor-pointer mt-1 h-1"
          onClick={() => dispatch(removeFromCart(key))}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
