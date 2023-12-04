import "./App.css";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TopCategories from "./components/TopCategories";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <Search />
      <TopCategories />
      <Categories />
    </div>
  );
}

export default App;
