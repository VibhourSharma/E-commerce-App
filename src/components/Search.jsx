import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import data from "../data";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter data based on the search term
    const results = data.all_products.filter((item) =>
      item.all_products.toLowerCase().includes(term.all_products.toLowerCase())
    );

    setSearchResults(results);
  };
  return (
    <div className="flex items-center justify-center pt-24 pb-8 w-[73%]">
      <input
        type="text"
        className="bg-[#F2F2F2] p-2 w-full rounded-lg focus:outline-none focus:outline-blue-300"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="flex items-center justify-center w-12 h-10 text-2xl ml-2 rounded-lg bg-[#F2F2F2]">
        <IoIosSearch />
      </button>
    </div>
  );
};

export default Search;
