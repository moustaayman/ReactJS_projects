import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState([new Values("#f15025").all(10)]);
  return (
    <>
      <Form />
      <ColorList colors={colors} />
    </>
  );
};
export default App;
