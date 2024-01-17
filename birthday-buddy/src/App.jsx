import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>there are {people.length} people</h3>
        <List people={people}></List>
      </section>
    </main>
  );
};
export default App;
