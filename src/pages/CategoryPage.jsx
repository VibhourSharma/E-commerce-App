import Navbar from "../components/Navbar";
import data from "../data";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center font-default">
        <div className="flex flex-wrap items-center w-[73%] justify-center gap-6 mt-16">
          <div className="flex items-center justify-start ml-8 w-full mt-2 h-12 text-2xl font-bold">
            <h2>Listed Categories</h2>
          </div>
          {data.top_categories.map((listedCat) => {
            return (
              <Link to={`/details/${listedCat.id}`} key={listedCat.id}>
                <div className="w-60 shadow-md rounded-lg cursor-pointer relative duration-300 hover:scale-105">
                  <img
                    src={listedCat.image}
                    alt="category-image"
                    className="w-full h-[80%] rounded-lg brightness-75"
                  />
                  <div className="text-base lowercase font-medium tracking-wide absolute bottom-0 mb-4 pl-2 text-white max-w-[80%]">
                    {listedCat.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
