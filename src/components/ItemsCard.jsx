import React from "react";

const ItemsCard = ({ productData }) => {
  const URL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const totalOff = Math.floor(
    ((productData.original_cost - productData.base_cost) /
      productData.original_cost) *
      100
  );
  return (
    <div className="relative flex justify-between flex-col overflow-hidden rounded-lg border border-gray-100 bg-white max-w-[18rem] h-[24rem] p-2">
      <div className="relative flex h-56 overflow-hidden rounded-xl">
        <img
          className="object-fit w-full h-full"
          src={URL}
          alt="product image"
        />
        {totalOff !== 0 ? (
          <span className="absolute top-0 right-0 m-2 bg-black px-2 text-center text-sm font-medium text-white">
            {totalOff}% Off
          </span>
        ) : (
          ""
        )}
      </div>
      <div
        className=" text-base font-medium
       lowercase tracking-tight whitespace-wrap max-w-[14rem] my-2"
      >
        {productData.name}
      </div>
      <div>{productData.base_qty}</div>
      <div className="py-2">
        <span className="text-xl font-bold text-slate-900">
          ₹{productData.base_cost}
        </span>
        <span className="text-sm text-slate-900 line-through">
          ₹{productData.original_cost}
        </span>
      </div>
      <div className="flex items-center justify-center rounded-md bg-slate-900 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Add to cart
      </div>
    </div>
  );
};

export default ItemsCard;
