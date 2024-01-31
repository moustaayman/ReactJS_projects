import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
