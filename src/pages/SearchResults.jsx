import React from "react";
import { useSearchParams } from "react-router-dom";
import data from "../data";
import ItemsCard from "../components/ItemsCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");

  const filteredSearchData = data.all_products.flatMap((category) =>
    category.products.filter((product) =>
      product.name.toLowerCase().includes(search_query.toLowerCase())
    )
  );

  console.log(search_query);
  console.log(filteredSearchData);

  return (
    <div>
      <h2>Search Results for "{search_query}"</h2>
      {filteredSearchData.map((product) => (
        <ItemsCard productData={product} />
      ))}
    </div>
  );
};

export default SearchResults;
