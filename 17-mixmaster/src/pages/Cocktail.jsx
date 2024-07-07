import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

export const cocktailLoader = async ({ params }) => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  return { drink: response.data };
};

const Cocktail = () => {
  const { drink } = useLoaderData();
  const singleDrink = drink.drinks[0];
  console.log(singleDrink);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {"ingredientsss..."}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
