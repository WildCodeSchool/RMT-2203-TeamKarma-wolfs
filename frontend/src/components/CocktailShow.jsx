import "../styles/CocktailCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DrinkIngredient from "./DrinkIngredients";

export default function CocktailShow({ cocktail }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller.signal;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`,
        {
          signal,
        }
      )
      .then((response) => response.data)
      .then((data) => {
        setCards(data.drinks[0]);
      });

    return function cleanup() {
      controller.abort();
    };
  }, []);

  return (
    <section className="cocktail-card random-card">
      <div className="container">
        <div className="card-box">
          <h2 className="cocktail-name">{cocktail.strDrink}</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingrédients</h3>
              <ul>
                <DrinkIngredient drink={cards} />
              </ul>
            </div>
            <div className="card-img">
              <img src={cocktail.strDrinkThumb} alt="cocktail" />
            </div>
          </div>
          <div className="card-bottom">
            <h3>Recipe</h3>
            <p>{cards.strInstructions}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
