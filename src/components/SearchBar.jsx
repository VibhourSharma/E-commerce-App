import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import data from "../data";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-center pt-24 pb-8 w-[73%]">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        className="bg-[#F2F2F2] p-2 w-full rounded-lg focus:outline-none focus:outline-blue-300"
        placeholder="Search for products..."
      />
      <button className="flex items-center justify-center w-12 h-10 text-2xl ml-2 rounded-lg bg-[#F2F2F2]">
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBar;
