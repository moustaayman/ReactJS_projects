import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const handleInputChange = () => {
    setCount(count + 1);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
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
        <button className="btn" type="submit" onSubmit={handleSubmitForm}>
          generate
        </button>
      </form>
    </section>
  );
};
export default App;
