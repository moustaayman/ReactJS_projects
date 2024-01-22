import data from "./data";
import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

//build an array of all unique categories
const allUniqueCategories = [
  "all",
  ...new Set(data.map((item) => item.category)),
];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allUniqueCategories);
  //set up a function which updates the state to show only the menu items that belong to that category
  const filterMenuItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenu(newMenu);
  };
  return (
    <main>
      <div className="menu">
        <Title title="our menu" />
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu menu={menu} />
      </div>
    </main>
  );
};
export default App;
