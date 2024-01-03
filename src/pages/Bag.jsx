import Navbar from "../components/Navbar";
import { MdDeleteForever } from "react-icons/md";

const Bag = () => {
  const URL =
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Navbar />
      <header class="text-center mt-20">
        <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>
      <div class="mx-auto max-w-screen-xl">
        <div class="mt-8 flex items-center justify-between">
          <ul class="space-y-4 w-[63%]">
            <li class="flex items-center">
              <img src={URL} alt="" class="h-32 w-32 rounded object-cover" />

              <div className="ml-4">
                <h3 class="text-xl text-gray-900">Basic Tee 6-Pack</h3>

                <dl class="mt-0.5 space-y-px text-sm text-gray-600">
                  <div>
                    <dt class="inline">Per Unit</dt>
                  </div>

                  <div>
                    <dt class="inline">₹ Price</dt>
                  </div>
                </dl>
              </div>

              <div class="flex flex-1 items-center justify-end gap-2">
                <button class="text-gray-600 transition hover:text-red-600">
                  <MdDeleteForever className="w-8 h-8" />
                </button>
              </div>
            </li>
          </ul>

          <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div class="w-screen max-w-sm space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>₹250</dd>
                </div>

                <div class="flex justify-between">
                  <dt>Discount</dt>
                  <dd>₹20</dd>
                </div>

                <div class="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>₹200</dd>
                </div>
              </dl>
              <div class="flex justify-end">
                <a
                  href="#"
                  class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
