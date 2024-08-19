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
    <div className="flex gap-2 border-b border-black p-1">
      <div className="w-20 h-20">
        <img
          src={cartImg}
          alt="item.productId.name"
          className="w-full h-full object-contain rounded"
        />
      </div>
      <div className="flex flex-grow justify-between">
        <div className="flex flex-col gap-1 font-normal text-sm">
          <p className="">{itemDetail.name}</p>
          <p className="sm:mb-1">
            Price: <span className="font-semibold">${itemDetail.price}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 sm:justify-between sm:items-center">
            <div className="border border-black w-fit">
              <span
                className=" px-2 border-r border-black inline-block text-lg cursor-pointer"
                onClick={() => dispatch(removeFromCart(key))}
              >
                -
              </span>
              <span className="text-center w-7 inline-block font-semibold">
                {quantity}
              </span>
              <span
                className=" px-2 border-l border-black inline-block text-lg cursor-pointer"
                onClick={() =>
                  dispatch(addToCart({ product: itemDetail, quantity }))
                }
              >
                +
              </span>
            </div>
            <p className="">
              SubTotal:{" "}
              <span className="font-semibold">
                ${itemDetail.price * quantity}
              </span>
            </p>
          </div>
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
