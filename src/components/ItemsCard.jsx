import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import TotalOff from "./TotalOff";

const ItemsCard = ({ productData }) => {
  return (
    <div className="relative flex justify-between flex-col overflow-hidden rounded-lg border border-gray-100 bg-white w-[16.5rem] h-[24rem] p-2 font-default">
      <Link to={`/product/${productData.id}`}>
        <div className="relative flex h-56 overflow-hidden rounded-xl">
          <img
            className="object-fit w-full h-full"
            src={productData.image}
            alt={`image ${productData.name}`}
          />
          <span className="absolute top-0 right-0">
            <TotalOff
              base_cost={productData.base_cost}
              original_cost={productData.original_cost}
            />
          </span>
        </div>
        <div
          className=" text-base font-medium
       lowercase tracking-tight whitespace-wrap max-w-[14rem] my-2"
        >
          {productData.name}
        </div>
        <div>{productData.base_qty}</div>
      </Link>
      <div className="py-2 flex justify-between">
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-slate-900">
            ₹{productData.base_cost}
          </span>
          <span className="text-sm text-slate-900 line-through">
            ₹{productData.original_cost}
          </span>
        </div>
        <AddToCartBtn cartItemData={productData} />
      </div>
    </div>
  );
};

export default ItemsCard;
