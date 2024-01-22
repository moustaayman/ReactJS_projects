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
  const [menu, setMenu] = useState([data]);
  const [categories, setCategories] = useState(allUniqueCategories);
  return (
    <main>
      <div className="menu">
        <Title title="our menu" />
        <Categories categories={categories} />
        <Menu menu={data} />
      </div>
    </main>
  );
};
export default App;
