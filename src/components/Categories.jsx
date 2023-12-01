import data from "../data";
import ItemsCard from "./ItemsCard";

const Categories = () => {
  return (
    <div className="w-[73%] font-default lowercase">
      {data.top_products.map((topCatData) => {
        return (
          <div>
            <div
              key={topCatData.category_id}
              className="flex items-center justify-between my-4 py-3 bg-[#F2F2F2] rounded-lg"
            >
              <div className="text-lg flex ml-4 font-bold normal-case">
                {topCatData.category_name}
                <div className="ml-3 bg-blue-500 text-[#F2F2F2] rounded-lg text-sm flex items-center justify-center w-7 font-medium">
                  {topCatData.product_count}
                </div>
              </div>
              <div className="capitalize mr-8 text-blue-600 font-medium">
                See All
              </div>
            </div>
            <ItemsCard products={topCatData.products} />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
