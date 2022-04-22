// import "@styles/CocktailCard.css";
// import "@styles/App.css";
import "../styles/CocktailCard.css";

// import { useState, useEffect } from "react";

export default function CocktailCard() {
  // const [card, setCard] = useState("");

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   axios
  //     .get(
  //       `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.idDrink}`,
  //       { signal }
  //     )
  //     .then((response) => response.json())
  //     .then((data) => setCard(data));
  //   return function cleanup() {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <section className="cocktail-card">
      <div className="container">
        <div className="card-box">
          {/* <h2 className="cocktail-name">{drinks.strDrink}</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingrédients</h3>
              <ul>
                {drinks.map((drink) => {
                  for (let i = 0; i < 15; i++) {
                    return <li>drink[`strIngredient${i}`]</li>; //si null rien, si non on met un li
                  }
                })}
              </ul>
              <p>{drinks.strIngredient1}</p>
            </div>
            <div className="card-img">
              <img src={drinks.strDrinkThumb} alt="Cocktail's picture"></img>
            </div>
          </div>
          <div className="card-bottom">
            <h3>Recipe</h3>
            <p>{drinks.strInstructions}</p>
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
