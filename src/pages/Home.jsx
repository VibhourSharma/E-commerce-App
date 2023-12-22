import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TopCategories from "../components/TopCategories";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import "../App.css";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Navbar />
        <SearchBar search={search} setSearch={setSearch} />
        <TopCategories />
        <Categories search={search} />
      </div>
    </>
  );
};

export default Home;
