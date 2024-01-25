import { Link } from "react-router-dom";
import data from "../data";

const TopCategories = () => {
  const URL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="w-[73%] flex flex-col font-default">
      <div className="flex items-center justify-between text-xl font-bold mb-4">
        Top Categories
      </div>

      <div className="flex gap-5 overflow-x-scroll no-scrollbar">
        {data.top_categories.map((topData) => {
          return (
            <Link key={topData.id} to={`/details/${topData.id}`}>
              <div className=" min-w-[9.5rem] cursor-pointer relative hover:brightness-90 ease-in duration-300">
                <img
                  src={topData.image}
                  alt="category-image"
                  className="w-full h-[80%] rounded-lg brightness-75"
                />
                <div className="text-sm lowercase font-[500] tracking-wide absolute bottom-0 mb-4 pl-2 text-white max-w-[80%]">
                  {topData.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;
