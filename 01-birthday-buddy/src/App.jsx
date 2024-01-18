import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays todays</h3>
        <List people={people}></List>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear list
        </button>
      </section>
    </main>
  );
};
export default App;
