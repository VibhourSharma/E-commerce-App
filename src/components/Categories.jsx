import { Link } from "react-router-dom";
import data from "../data";
import ItemsCard from "./ItemsCard";

const Categories = ({ search, handleClick }) => {
  return (
    <>
      {data.top_products.map((topCatData) => {
        return (
          <div className="w-[73%] font-default" key={topCatData.category_id}>
            <div className="flex items-center justify-between my-4 py-3 bg-[#F2F2F2] rounded-lg">
              <div className="text-lg flex ml-4 font-bold normal-case">
                {topCatData.category_name}
                <div className="ml-3 bg-blue-500 text-[#F2F2F2] rounded-lg text-sm flex items-center justify-center w-7 font-medium">
                  {topCatData.product_count}
                </div>
              </div>
              <Link to={`/details/${topCatData.category_id}`}>
                <div className="capitalize mr-8 text-blue-600 font-medium">
                  See All
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {topCatData.products
                .filter((product) =>
                  search.trim("") === ""
                    ? true
                    : product.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((productData) => {
                  return (
                    // <Link
                    //   to={`details/${topCatData.category_id}/${productData.id}`}
                    // >
                    <ItemsCard
                      productData={productData}
                      key={productData.id}
                      handleClick={handleClick}
                    />
                    // </Link>
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
