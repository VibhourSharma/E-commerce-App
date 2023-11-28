import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="flex items-center justify-center py-8 w-[73%]">
      <input
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

export default Search;
