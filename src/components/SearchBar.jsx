import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?search_query=${search}`);
    }
  };

  const handleSearchButtonClick = () => {
    navigate(`/search?search_query=${search}`);
  };

  return (
    <div className="flex items-center justify-center mt-20 mb-6 w-[73%]">
      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyPress={handleKeyPress}
        value={search}
        type="text"
        className="bg-[#F2F2F2] p-2 w-full rounded-lg focus:outline-none focus:outline-blue-300"
        placeholder="Search for products..."
      />
      <button
        onClick={handleSearchButtonClick}
        className="flex items-center justify-center w-12 h-10 text-2xl ml-2 rounded-lg bg-[#3B82F6] text-white"
      >
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBar;
