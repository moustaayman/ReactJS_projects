import { useState } from "react";
import people from "./data";
import { FaQuoteRight } from "react-icons/fa";
const App = () => {
  console.log(people);
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = people[index];
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">{<FaQuoteRight />}</span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </article>
    </main>
  );
};
export default App;
