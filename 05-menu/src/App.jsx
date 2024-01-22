import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data";

const allUniqueCategories = [
  "all",
  ...new Set(data.map((item) => item.category)),
];

const App = () => {
  const [menu, setMenu] = useState([data]);
  const [categories, setCategories] = useState(allUniqueCategories);
  //build an array of all unique categories

  console.log(allUniqueCategories);
  return (
    <main>
      <div className="menu">
        <Title title="our menu" />
        <Menu menu={data} />
      </div>
    </main>
  );
};
export default App;
