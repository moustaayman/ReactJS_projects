import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      console.log("Please enter an item");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
