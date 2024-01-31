import { useState } from "react";

const SingleItem = ({ item, editItem, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
