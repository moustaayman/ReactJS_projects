import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const searchInput = "margarita";
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
  );
  return { drinks: response.data.drinks, searchInput };
};

const Landing = () => {
  const { drinks, searchInput } = useLoaderData();
  console.log(drinks);
  console.log(searchInput);
  return <div>Landing</div>;
};

export default Landing;
