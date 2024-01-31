import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("please provide value");
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
          value={newItem}
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
