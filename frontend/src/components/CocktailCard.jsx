import "@styles/CocktailCard.css";
// import "@styles/App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import DrinkIngredients from "./DrinkIngredients";

// Composant enfant
export default function CocktailCard({ handleDisplay, id }) {
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
    <section className="cocktail-card">
      <div className="container">
        <div className="card-box">
          <h2 className="cocktail-name">{card.strDrink}</h2>
          <div className="card-top">
            <button type="button" onClick={(e) => handleDisplay(e)}>
              Close
            </button>
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
    </section>
  );
}
