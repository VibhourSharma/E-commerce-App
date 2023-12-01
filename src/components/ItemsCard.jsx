import React from "react";

const ItemsCard = ({ products }) => {
  const URL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      {products.map((productsData) => {
        return (
          <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
              <img
                className="object-fit w-full h-full"
                src={URL}
                alt="product image"
              />
              <span className="absolute top-0 right-0 m-2 bg-black px-2 text-center text-sm font-medium text-white">
                24% OFF
              </span>
            </div>
            <div className="mt-4 px-5 pb-5">
              <div>
                <h5 className="text-xl tracking-tight text-slate-900">
                  {productsData.name}
                </h5>
              </div>
              <div>per unit</div>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    $449
                  </span>
                  <span className="text-sm text-slate-900 line-through">
                    $699
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Add to cart
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsCard;
