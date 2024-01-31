import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success("item added to the list");
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} />
    </section>
  );
};

export default App;
