import { FiHome, FiShoppingBag, FiList } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex w-full h-16 items-center justify-center font-default">
      <div className="flex w-[73%] items-center justify-around bg-[#F2F2F2] h-full">
        <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
          <FiHome className="text-3xl" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
          <BiCategoryAlt className="text-3xl" />
          <span className="text-xs">Categories</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
          <FiShoppingBag className="text-3xl" />
          <span className="text-xs">Bag</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
          <FiList className="text-3xl" />
          <span className="text-xs">Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
