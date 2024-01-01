import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data";
import { IoMdArrowRoundBack } from "react-icons/io";

const CategoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const CategoryDetails = data.top_products.find(
    (items) => items.category_id === +id
  );
  const URL =
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="my-4 py-3 bg-[#F2F2F2] rounded-lg w-[73%]">
          <div className="text-lg flex items-center ml-4 font-bold normal-case">
            <button className="p-2 mr-4" onClick={goBack}>
              <IoMdArrowRoundBack />
            </button>
            {CategoryDetails.category_name}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-[73%]">
          {CategoryDetails.products.map((itemDetails) => {
            const totalOff = Math.floor(
              ((itemDetails.original_cost - itemDetails.base_cost) /
                itemDetails.original_cost) *
                100
            );

            const itemLink = `/details/${CategoryDetails.category_id}/${itemDetails.id}`;
            return (
              <div className="relative flex justify-between flex-col overflow-hidden rounded-lg border border-gray-100 bg-white w-[16.5rem] h-[24rem] p-2">
                <Link to={itemLink}>
                  <div className="relative flex h-56 overflow-hidden rounded-xl">
                    <img
                      className="object-fit w-full h-full"
                      src={URL}
                      alt={`Image: ${itemDetails.id}`}
                    />
                    {totalOff !== 0 ? (
                      <span className="absolute top-0 right-0 m-2 bg-orange-500 px-2 text-center text-sm font-medium text-white rounded-md">
                        {totalOff}% Off
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className=" text-base font-medium
       lowercase tracking-tight whitespace-wrap max-w-[14rem] my-2"
                  >
                    {itemDetails.name}
                  </div>
                  <div>{itemDetails.base_qty}</div>
                </Link>
                <div className="py-2 flex justify-between">
                  <div className="flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-900">
                      ₹{itemDetails.base_cost}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      ₹{itemDetails.original_cost}
                    </span>
                  </div>
                  <div className="flex items-center justify-center rounded-md text-blue-700 py-2 px-2 text-center text-sm font-medium border border-blue-700 cursor-pointer">
                    Add to cart
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
