import "@styles/CocktailCard.css";
import DrinkIngredients from "@components/DrinkIngredients";
import { useState, useEffect } from "react";
import axios from "axios";

const random = () => {
  const [randomCard, setRandomCard] = useState("");

  const callRandom = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => response.data)
      .then((data) => {
        setRandomCard(data.drinks[0]);
      });
  };

  useEffect(() => {
    callRandom();
  }, []);

  return (
    <section className="cocktail-card random-card">
      <div className="container">
        <button
          type="button"
          className="select-button"
          onClick={() => callRandom()}
        >
          Show another
        </button>
        <div className="card-box">
          <h2 className="cocktail-name">{randomCard.strDrink}</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingrédients</h3>
              <ul>
                <DrinkIngredients drink={randomCard} />
              </ul>
            </div>
            <div className="card-img">
              <img src={randomCard.strDrinkThumb} alt="cocktail" />
            </div>
          </div>
          <div className="card-bottom">
            <h3>Recipe</h3>
            <p>{randomCard.strInstructions}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default random;
