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
            <div
              key={topData.id}
              className="flex items-center flex-col min-w-[10rem] h-52 mr-6 overflow-hidden cursor-pointer"
            >
              <img
                src={URL}
                alt="category-image"
                className="w-full h-[80%] rounded-lg duration-300 hover:scale-105"
              />
              <div className="text-sm mt-2 font-semibold max-w-[12rem] overflow-hidden">
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
