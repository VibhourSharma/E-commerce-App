import { FiHome, FiShoppingBag, FiList } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full h-16 items-center justify-center font-default fixed left-0 top-0 width-[100%]  shadow-sm bg-white z-50">
      <div className="flex w-[73%] items-center justify-around h-full">
        <NavLink
          to="/"
          className={({ isActive }) => `
        ${isActive ? "text-[#3B82F6]" : "text-gray-400"}`}
        >
          <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
            <FiHome className="text-3xl" />
            <span className="text-xs">Home</span>
          </div>
        </NavLink>
        <NavLink to="/categories">
          <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
            <BiCategoryAlt className="text-3xl" />
            <span className="text-xs">Categories</span>
          </div>
        </NavLink>
        <NavLink to="/bag">
          <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
            <FiShoppingBag className="text-3xl" />
            <span className="text-xs">Bag</span>
          </div>
        </NavLink>
        <NavLink to="/orders">
          <div className="flex flex-col items-center text-gray-400 hover:text-[#3B82F6]">
            <FiList className="text-3xl" />
            <span className="text-xs">Orders</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
