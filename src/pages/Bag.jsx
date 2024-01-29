import Navbar from "../components/Navbar";
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from "../context/Cart";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emptybag from "../assets/empty bag.svg";

const Bag = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartSubTotal,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    saveOrdersToLocalStorage(cartItems);
    navigate("/checkout");
    clearCart();
  };

  const saveOrdersToLocalStorage = (orders) => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrders = [...storedOrders, ...orders];
    localStorage.setItem("orders", JSON.stringify(newOrders));
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center font-default">
        <div className="flex items-center flex-col justify-center mt-20 w-[73%] text-center">
          {cartItems.length === 0 ? (
            <div className="w-full h-[60vh] flex flex-col items-center justify-center">
              <img src={emptybag} alt="empty bag" className="p-4 w-[40%]" />
              <p>Your Bag is currently empty.</p>
              <Link to="/">
                <button className="p-2 mt-8 border-orange-600 border-[1px] rounded-lg">
                  Homepage
                </button>
              </Link>
            </div>
          ) : (
            <>
              <span className="w-full font-medium flex items-center justify-between mb-4">
                <div className="text-xl flex ml-4 font-bold normal-case">
                  Total Products
                  <div className="ml-3 bg-blue-500 text-[#F2F2F2] rounded-lg text-sm flex items-center justify-center w-7 font-medium">
                    {cartItems.length}
                  </div>
                </div>
                <button
                  className="flex items-center justify-around p-1.5 border-[1px] border-black transition hover:text-red-600 hover:border-red-600 rounded-lg"
                  onClick={() => clearCart()}
                >
                  <p>Clear Cart</p>
                  <span className="w-6 h-6 flex items-center justify-center">
                    <MdDeleteForever className="w-full h-full" />
                  </span>
                </button>
              </span>
              <div className="w-full flex justify-between">
                <div>
                  {cartItems.map((presentItem) => (
                    <>
                      <div className="flex mt-4" key={presentItem.id}>
                        <img
                          src={presentItem.image}
                          alt={`Image number: ${presentItem.id}`}
                          className="w-48 h-48 rounded-lg"
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
                </div>
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-sm space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>₹{getCartSubTotal()}</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>Delivery Charges</dt>
                        <dd>₹30</dd>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>₹{getCartTotal()}</dd>
                      </div>
                    </dl>
                    <div className="flex justify-end">
                      <button
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Bag;
