import React from "react";
import data from "../data";

const TopCategories = () => {
  const URL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="w-[73%] flex flex-col font-default">
      <div className="flex items-center justify-start text-xl font-bold mb-4">
        Top Categories
      </div>
      <div className="flex overflow-x-hidden">
        {data.top_categories.map((topData) => {
          return (
            <div className="flex items-center flex-col min-w-[10rem] h-52 mr-8">
              <img src={URL} alt="" className="w-full h-[80%] rounded-lg" />
              <div className="text-sm mt-2 font-semibold whitespace-wrap max-w-[12rem] overflow-hidden">
                {topData.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;
