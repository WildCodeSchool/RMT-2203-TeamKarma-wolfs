// import "@styles/CocktailCard.css";
// import "@styles/App.css";
// import "../styles/CocktailCard.css";

// import { useState, useEffect } from "react";
// import axios from "axios";

export default function CocktailCard() {
  // const [card, setCard] = useState("");

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller.signal;

  //   axios
  //     .get(
  //       `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,
  //       { signal }
  //     )
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setCard(data.drinks[0]);
  //     });

  //   return function cleanup() {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <section className="cocktail-card">
      <div className="container">
        <div className="card-box">
          {/* <h2 className="cocktail-name">{card.strDrink}</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingrédients</h3>
              <ul>
                {card.map(drink => ({
                  for (let i = 0; i < 15; i += 1) {
                    <li>{drink[`strIngredient${i}`]}</li>;
                    // si null rien, si non on met un li
                  }
                })}
              </ul>
            </div>
            <div className="card-img">
              <img src={card.strDrinkThumb} alt="cocktail" />
            </div>
          </div>
          <div className="card-bottom">
            <h3>Recipe</h3>
            <p>{card.strInstructions}</p>
          </div> */}

          <h2 className="cocktail-name">My Cocktail</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingredients</h3>
              <p>blablabla</p>
            </div>
            <div className="card-img">
              {/* <img src="https://www.thecocktaildb.com/images/ingredients/Watermelon-small.png"></img> */}
            </div>
          </div>
          <div className="card-bottom">
            <h3>Recipe</h3>
            <p>
              In a mason jar muddle the watermelon and 5 mint leaves together
              into a puree and strain. Next add the grapefruit juice, juice of
              half a lime and the tequila as well as some ice. Put a lid on the
              jar and shake. Pour into a glass and add more ice. Garnish with
              fresh mint and a small slice of watermelon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
