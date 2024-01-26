import Navbar from "../components/Navbar";
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from "../context/Cart";
import { useState, useContext } from "react";

const Bag = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  console.log(cartItems);

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center font-default">
        <div className="mt-20 w-[73%] text-center">
          {cartItems.length === 0 ? (
            <span className="text-2xl font-medium">
              Your cart is currently empty
            </span>
          ) : (
            <span className=" font-medium flex items-center justify-between">
              <span className="text-xl">
                Your Cart has a total of {cartItems.length} items
              </span>
              <button
                className="flex items-center justify-around p-2 border-[1px] border-black transition hover:text-red-600 hover:border-red-600 rounded-lg"
                onClick={() => clearCart()}
              >
                <p>Clear Cart</p>
                <span className="w-6 h-6 flex items-center justify-center">
                  <MdDeleteForever className="w-full h-full" />
                </span>
              </button>
            </span>
          )}
          <div className="flex items-center justify-between">
            <div>
              {cartItems.map((presentItem) => (
                <>
                  <div className="flex mt-4">
                    <img
                      src={presentItem.image}
                      alt={`Image number: ${presentItem.id}`}
                      className="w-48 h-48"
                    />
                    <div className="flex flex-col items-start ml-4">
                      <span>{presentItem.name}</span>
                      <span>{presentItem.base_qty}</span>
                      <span className="my-4">₹{presentItem.base_cost}</span>
                      <div className="flex items-center justify-center rounded-md text-blue-700 w-[5rem] h-[2.2rem] text-center text-sm font-medium border border-blue-700 cursor-pointer">
                        <button
                          onClick={() => removeFromCart(presentItem)}
                          className="text-2xl w-[33.33%]"
                        >
                          -
                        </button>
                        <span className="text-base w-[33.33%]">
                          {presentItem.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(presentItem)}
                          className="text-2xl w-[33.33%]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;

{
  /* <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
  <div class="w-screen max-w-sm space-y-4">
    <dl class="space-y-0.5 text-sm text-gray-700">
      <div class="flex justify-between">
        <dt>Subtotal</dt>
        <dd>₹250</dd>
      </div>

      <div class="flex justify-between">
        <dt>Delivery Charges</dt>
        <dd>₹30</dd>
      </div>

      <div class="flex justify-between !text-base font-medium">
        <dt>Total</dt>
        <dd>₹200</dd>
      </div>
    </dl>
    <div class="flex justify-end">
      <button class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
        Place Order
      </button>
    </div>
  </div>
</div>; */
}
