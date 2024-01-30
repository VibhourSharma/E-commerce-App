import { useNavigate, useParams } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import data from "../data";
import { IoMdArrowRoundBack } from "react-icons/io";
import ItemsCard from "../components/ItemsCard";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/Cart";
import { useContext } from "react";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const CategoryDetails = data.top_products.find(
    (items) => items.category_id === +categoryId
  );
  const { cartItems } = useContext(CartContext);

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="w-full flex items-center justify-center flex-col font-default">
        <div className="my-4 py-3 bg-[#F2F2F2] rounded-lg w-[73%]">
          <div className="text-lg flex items-center ml-4 font-bold normal-case">
            <button className="p-2 mr-4" onClick={goBack}>
              <IoMdArrowRoundBack />
            </button>
            <div className="flex justify-between w-full items-center">
              <div>{CategoryDetails.category_name}</div>
              <div className="mr-4">
                <NavLink to="/bag">
                  <div className="flex flex-col items-center justify-center relative">
                    <FiShoppingBag className="text-3xl" />
                  </div>
                  {cartItems.length === 0 ? (
                    " "
                  ) : (
                    <span className="text-center absolute top-4 px-2 text-base rounded-[50%] bg-red-600 text-white ml-3">
                      {cartItems.length}
                    </span>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-[73%]">
          {CategoryDetails.products.map((itemDetails) => {
            return <ItemsCard productData={itemDetails} key={itemDetails.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
