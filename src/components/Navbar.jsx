import { FiHome, FiShoppingBag, FiList } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = ({ size }) => {
  return (
    <div className="flex w-full h-16 items-center justify-center font-default fixed left-0 bottom-0 width-[100%]  shadow-sm bg-white z-50">
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

        <div className="flex">
          <NavLink
            to="/bag"
            className={({ isActive }) => `
        ${
          isActive ? "text-[#3B82F6]" : "text-gray-400"
        } flex flex-col items-center`}
          >
            <div className="flex flex-col items-center justify-center relative">
              <FiShoppingBag className="text-3xl" />
              <span className="text-xs">Bag</span>
            </div>
            {size === 0 ? (
              " "
            ) : (
              <span className="text-center font-semibold absolute top-0 right-[37rem] w-5 text-[13px] rounded-[50%] bg-red-600 text-white">
                {size}
              </span>
            )}
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
