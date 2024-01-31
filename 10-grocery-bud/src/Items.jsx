import SingleItem from "./SingleItem";
import { nanoid } from "nanoid";

const Items = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <SingleItem key={nanoid()} item={item} />
      ))}
    </>
  );
};
export default Items;
