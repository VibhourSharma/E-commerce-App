import { FiHome, FiShoppingBag, FiList } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full h-16 items-center justify-center font-default fixed left-0 top-0 width-[100%]  shadow-sm bg-white z-50">
      <div className="flex w-[73%] items-center justify-around h-full">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => `
        ${
          isActive ? "text-[#3B82F6]" : "text-gray-400"
        } flex flex-col items-center`}
          >
            <FiHome className="text-3xl" />
            <span className="text-xs">Home</span>
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/categories"
            className={({ isActive }) => `
        ${
          isActive ? "text-[#3B82F6]" : "text-gray-400"
        } flex flex-col items-center`}
          >
            <BiCategoryAlt className="text-3xl" />
            <span className="text-xs">Categories</span>
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/bag"
            className={({ isActive }) => `
        ${
          isActive ? "text-[#3B82F6]" : "text-gray-400"
        } flex flex-col items-center`}
          >
            <FiShoppingBag className="text-3xl" />
            <span className="text-xs">Bag</span>
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/orders"
            className={({ isActive }) => `
        ${
          isActive ? "text-[#3B82F6]" : "text-gray-400"
        } flex flex-col items-center`}
          >
            <FiList className="text-3xl" />
            <span className="text-xs">Orders</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
