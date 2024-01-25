import { IoIosSearch } from "react-icons/io";
import { useSearchParams, Link } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center justify-center mt-20 mb-6 w-[73%]">
      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        value={search}
        type="text"
        className="bg-[#F2F2F2] p-2 w-full rounded-lg focus:outline-none focus:outline-blue-300"
        placeholder="Search for products..."
      />
      <Link to={search.trim() === "" ? "/" : `/search?search_query=${search}`}>
        <button className="flex items-center justify-center w-12 h-10 text-2xl ml-2 rounded-lg bg-[#F2F2F2]">
          <IoIosSearch />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
