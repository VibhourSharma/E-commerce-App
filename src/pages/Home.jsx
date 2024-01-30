import React from "react";
import SearchBar from "../components/SearchBar";
import TopCategories from "../components/TopCategories";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import "../App.css";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <SearchBar />
      <TopCategories />
      <Categories />
    </div>
  );
};

export default Home;
