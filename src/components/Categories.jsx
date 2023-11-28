import data from "../data";

const Categories = () => {
  return (
    <div className="w-[73%] font-default lowercase">
      {data.top_categories.map((topCatData) => {
        return (
          <div className="flex items-center justify-start my-4 py-3 bg-[#F2F2F2] rounded-lg">
            <div className="text-lg flex ml-4 font-bold normal-case">
              {topCatData.name}
              <div className="ml-3 bg-blue-500 text-[#F2F2F2] rounded-lg text-sm flex items-center justify-center w-7 font-medium">
                {topCatData.product_count}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
