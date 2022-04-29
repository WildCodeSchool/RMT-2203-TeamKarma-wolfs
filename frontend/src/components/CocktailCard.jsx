import "@styles/CocktailCard.css";

import { useEffect, useState } from "react";
import axios from "axios";
import DrinkIngredients from "./DrinkIngredients";

export default function CocktailCard({ handleDisplay, counterDivToggle, id }) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller.signal;
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, {
        signal,
      })
      .then((response) => response.data)
      .then((data) => {
        setCard(data.drinks[0]);
      });

    return function cleanup() {
      controller.abort();
    };
  }, []);

  return (
    <div className="cocktail-card">
      <div className="card-box">
        <button
          type="button"
          id="closeRecipe"
          onClick={(e) => {
            handleDisplay(e);
            counterDivToggle();
          }}
        >
          X
        </button>
        <h2 className="cocktail-name">{card.strDrink}</h2>
        <div className="card-top">
          <div className="ingredients">
            <h3>Ingrédients</h3>
            <ul>
              <DrinkIngredients drink={card} />
            </ul>
          </div>
          <div className="card-img">
            <img src={card.strDrinkThumb} alt="cocktail" />
          </div>
        </div>
        <div className="card-bottom">
          <h3>Recipe</h3>
          <p>{card.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
