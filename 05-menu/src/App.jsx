import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data";

const App = () => {
  const [menu, setMenu] = useState([data]);
  return (
    <main>
      <div className="menu">
        <Title title="our menu" />
        <Menu menu={menu} />
      </div>
    </main>
  );
};
export default App;
