import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

export const loader = async () => {
  const searchInput = "margarita";
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
  );
  return { drinks: response.data.drinks, searchInput };
};

const Landing = () => {
  const { drinks, searchInput } = useLoaderData();
  return <CocktailList drinks={drinks} />;
};

export default Landing;
