import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full flex items-center justify-center font-default">
        <div className="w-[73%] mt-16 flex flex-col">
          {orders.length === 0 ? (
            <div className="flex items-center justify-center mt-24 text-gray-400 flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p>No Orders Running Currently!</p>
            </div>
          ) : (
            <>
              <div className="p-2 font-bold text-xl mt-4">My Orders</div>
              <div className="flex flex-wrap items-center justify-between gap-6 my-3">
                {orders.map((order) => {
                  return (
                    <div className="flex w-[33rem]">
                      <img
                        src={order.image}
                        alt={`Image number: ${order.id}`}
                        className="w-36 h-36 rounded-lg"
                      />
                      <div className="flex flex-col items-start ml-4">
                        <span>{order.name}</span>
                        <span className="text-base text-gray-500 font-bold my-2">
                          {order.quantity} ITEM
                        </span>
                        <span className="w-full flex items-center">
                          <span className="text-sm px-2 border bg-[#D0E2F0] border-blue-600 text-blue-600 text-center mr-2">
                            {order.quantity}
                          </span>
                          <span>x</span>
                          <span className="ml-2">₹{order.base_cost}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
