import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import data from "../data";
import ItemsCard from "../components/ItemsCard";
import SearchBar from "../components/SearchBar";
import { IoMdArrowRoundBack } from "react-icons/io";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");
  const navigate = useNavigate();

  const filteredSearchData = data.all_products.flatMap((topCatData) =>
    topCatData.products.filter((filteredProduct) =>
      filteredProduct.name.toLowerCase().includes(search_query.toLowerCase())
    )
  );

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-[96%] flex justify-center items-center mt-[-50px] gap-1">
        <button
          className="h-10 w-10 flex items-center justify-center text-center mt-[3.5rem] bg-[#F2F2F2] rounded-lg"
          onClick={goBack}
        >
          <IoMdArrowRoundBack />
        </button>
        <SearchBar />
      </div>
      <div className="w-[73%] font-default">
        {filteredSearchData.length === 0 ? (
          <div className="w-full h-[60vh] flex flex-col items-center justify-center">
            <span className="p-4 w-[90%] text-center bg-sky-200 text-blue-600 text-2xl font-medium rounded-lg">
              No results found for "{search_query}"
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6 py-3 rounded-lg">
              <div className="text-lg flex ml-4 normal-case">
                <span className="px-2 font-semibold">
                  {filteredSearchData.length}
                </span>
                Search results for "{search_query}"
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex w-[73%] flex-wrap items-center gap-[17.6px]">
        {filteredSearchData.map((filteredProduct) => (
          <ItemsCard productData={filteredProduct} key={filteredProduct.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
