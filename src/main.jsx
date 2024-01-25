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
    path: "details/:id",
    element: <CategoryDetail />,
  },
  {
    path: "details/:id/:id",
    element: <ItemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
