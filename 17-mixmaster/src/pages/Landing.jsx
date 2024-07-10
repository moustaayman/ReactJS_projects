import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchInput = url.searchParams.get("search") || "";
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
  );
  return { drinks: response.data.drinks, searchInput };
};

const Landing = () => {
  const { drinks, searchInput } = useLoaderData();
  return (
    <>
      <SearchForm searchInput={searchInput} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
