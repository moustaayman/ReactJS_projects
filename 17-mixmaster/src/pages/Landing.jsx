import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchInput) => {
  return {
    queryKey: ["search", searchInput || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchInput}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchInput = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchInput));
    return { searchInput };
  };

const Landing = () => {
  const { searchInput } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchInput));
  return (
    <>
      <SearchForm searchInput={searchInput} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
