import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleInputChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmitForm}>
        <label>paragraphs:</label>
        <input
          type="number"
          name=""
          id=""
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
