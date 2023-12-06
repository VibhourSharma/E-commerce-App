import React from "react";
import Search from "../components/Search";
import TopCategories from "../components/TopCategories";
import Categories from "../components/Categories";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Navbar />
        <Search />
        <TopCategories />
        <Categories />
      </div>
    </>
  );
};

export default Home;
