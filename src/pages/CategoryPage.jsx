import Navbar from "../components/Navbar";
import data from "../data";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const URL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center font-default">
        <div className="flex flex-wrap items-center w-[73%] justify-evenly mt-4 gap-2">
          <div className="flex items-center justify-start ml-8 mb-4 w-full mt-16 h-12 text-2xl font-bold">
            <h2>Listed Categories</h2>
          </div>
          {data.top_categories.map((listedCat) => {
            return (
              <Link to={`/details/${listedCat.id}`}>
                <div
                  class="w-60 shadow-md mb-6 duration-300 hover:scale-105 rounded-lg cursor-pointer"
                  key={listedCat.id}
                >
                  <img
                    src={URL}
                    alt="Category-image"
                    className="w-full rounded-lg"
                  />
                  <div className="h-12 text-center flex items-center justify-center text-sm font-semibold">
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
