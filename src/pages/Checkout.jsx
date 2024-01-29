import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PlacedOrderModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center font-default">
        <div className="w-[50%] mt-36 text-center">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 text-[#3A7BC8]"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p className="m-4 font-bold text-xl">Your Order is Successful!</p>
          <p className="text-gray-500">Thank you for shopping with us.</p>
          <div className="mt-12 gap-4 h-28 flex items-start justify-center flex-wrap font-medium">
            <button
              className="border-2 border-[#3A7BC8] text-[#3A7BC8] w-56 h-12 rounded-lg"
              onClick={() => navigate("/orders")}
            >
              See All Orders
            </button>
            <button
              className="bg-[#3A7BC8] text-white w-56 h-12 rounded-lg"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacedOrderModal;
