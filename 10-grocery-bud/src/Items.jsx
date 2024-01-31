import SingleItem from "./SingleItem";
import { nanoid } from "nanoid";

const Items = ({ items, editItem, removeItem }) => {
  return (
    <>
      {items.map((item) => (
        <SingleItem
          key={nanoid()}
          item={item}
          editItem={editItem}
          removeItem={removeItem}
        />
      ))}
    </>
  );
};
export default Items;
