import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const AddToCartBtn = ({ cartItemData }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const alreadyAdded = cartItems.find((x) => x.id === cartItemData.id);

  return (
    <div className="flex items-center justify-center rounded-md text-blue-700 w-[5rem] h-[2.2rem] text-center text-sm font-medium border border-blue-700 cursor-pointer">
      {!alreadyAdded ? (
        <button onClick={() => addToCart(cartItemData)}>Add +</button>
      ) : (
        <>
          <button
            onClick={() => removeFromCart(cartItemData)}
            className="text-2xl w-[33.33%]"
          >
            -
          </button>
          <span className="text-base w-[33.33%]">{alreadyAdded.quantity}</span>
          <button
            onClick={() => addToCart(cartItemData)}
            className="text-2xl w-[33.33%]"
          >
            +
          </button>
        </>
      )}
    </div>
  );
};

export default AddToCartBtn;
