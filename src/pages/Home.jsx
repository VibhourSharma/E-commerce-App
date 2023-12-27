import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TopCategories from "../components/TopCategories";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import "../App.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  function handleClick(cartItem) {
    console.log(cartItem);
    let isPresent = false;
    cart.forEach((cartProduct) => {
      if (cartItem.id === cartProduct.id) isPresent === true;
    });
    if (isPresent) {
      console.log("item already present");
    }
    setCart([...cart, cartItem]);
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Navbar size={cart.length} />
        <SearchBar search={search} setSearch={setSearch} />
        <TopCategories />
        <Categories search={search} handleClick={handleClick} />
      </div>
    </>
  );
};

export default Home;
