import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Bag from "./pages/Bag";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import CategoryDetail from "./pages/CategoryDetail";
import ItemPage from "./pages/ItemPage";
import SearchResults from "./pages/SearchResults";
import { CartProvider } from "./context/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
  {
    path: "categories",
    element: <CategoryPage />,
  },
  {
    path: "bag",
    element: <Bag />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "details/:categoryId",
    element: <CategoryDetail />,
  },
  {
    path: "product/:productId",
    element: <ItemPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
