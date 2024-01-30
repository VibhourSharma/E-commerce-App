import { useNavigate, useParams } from "react-router-dom";
import data from "../data";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/Cart";
import { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import TotalOff from "../components/TotalOff.jsx";

const ItemPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const categoryWithProduct = data.top_products.find((category) =>
    category.products.find((product) => product.id === +productId)
  );

  const productDetails = categoryWithProduct?.products.find(
    (product) => product.id === +productId
  );

  const alreadyAdded = cartItems.find(
    (cartItem) => cartItem.id === productDetails.id
  );

  return (
    <>
      <div className="w-full flex items-center justify-center flex-col font-default">
        <div className="my-4 py-3 rounded-lg w-[60%]">
          <div className="text-lg flex items-center ml-4 font-bold normal-case">
            <button className="p-2 mr-4" onClick={goBack}>
              <IoMdArrowRoundBack />
            </button>
            <div className="w-full flex items-center justify-between mr-12">
              <div>{categoryWithProduct.category_name}</div>
              <div>
                <div>
                  <NavLink to="/bag">
                    <div className="flex flex-col items-center justify-center relative">
                      <FiShoppingBag className="text-3xl" />
                    </div>
                    {cartItems.length === 0 ? (
                      " "
                    ) : (
                      <span className="text-center absolute top-4 text-base px-[8px] rounded-[50%] bg-red-600 text-white ml-3">
                        {cartItems.length}
                      </span>
                    )}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center font-default">
        <div className="w-[73%] justify-center flex flex-wrap">
          <img
            src={productDetails.image}
            alt={`image: ${productDetails.id}`}
            className="h-96 w-96 rounded-lg"
          />
          <div className="mt-8 ml-12">
            <div className="flex flex-col">
              <span className="tracking-wide text-lg">
                {productDetails.name}
              </span>
              <span className="text-lg mt-1">{productDetails.base_qty}</span>
              <div className="flex items-center mt-1">
                <span className="text-xl font-bold text-slate-900 mr-1">
                  ₹{productDetails.base_cost}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  ₹{productDetails.original_cost}
                </span>
                <TotalOff
                  base_cost={productDetails.base_cost}
                  original_cost={productDetails.original_cost}
                />
              </div>
            </div>

            <div className="border border-[#3A7BC8] text-[#3A7BC8] h-12 w-72 rounded-lg mt-12 flex items-center justify-center">
              {!alreadyAdded ? (
                <button
                  onClick={() => addToCart(productDetails)}
                  className="h-full w-full"
                >
                  Add To Bag
                </button>
              ) : (
                <>
                  <button
                    onClick={() => removeFromCart(productDetails)}
                    className="text-3xl w-[33.33%]"
                  >
                    -
                  </button>
                  <span className="text-lg w-[33.33%] text-center">
                    {alreadyAdded.quantity}
                  </span>
                  <button
                    onClick={() => addToCart(productDetails)}
                    className="text-3xl w-[33.33%]"
                  >
                    +
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
