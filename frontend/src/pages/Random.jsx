import "../styles/random-card.css";

import { useState, useEffect } from "react";
import axios from "axios";

const random = () => {
  const [randomCard, setRandomCard] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => response.data)
      .then((data) => {
        setRandomCard(data.drinks[0]);
      });
  }, []);

  return (
    <section className="cocktail-card">
      <div className="container">
        <div className="card-box">
          <h2 className="cocktail-name">{randomCard.strDrink}</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingrédients</h3>
              <ul>
                <p>jjjjjj</p>
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
