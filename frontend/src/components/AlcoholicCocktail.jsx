import { useState, useEffect } from "react";
import axios from "axios";
import "@styles/App.css";
import ResultCocktails from "@components/ResultCocktails";

export default function AlcoholCocktail({ handleChange, handleChoosen }) {
  const [alcoholCocktail, setAlcoholCocktail] = useState([]);
  const [hardDisplay, setHardDisplay] = useState(null);

  const setDisplay = () => {
    if (hardDisplay === null) {
      setHardDisplay(true);
    } else {
      setHardDisplay(null);
    }
  };

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.data)
      .then((data) => setAlcoholCocktail(data.drinks));
  }, []);

  return (
    <div className="show-cocktails">
      <button
        className="ingredientButton"
        type="button"
        onClick={() => setDisplay()}
        onKeyDown={() => setDisplay()}
      >
        <h2>Alcoholic Cocktails</h2>
        {hardDisplay === null ? <p>Click to expand</p> : <p>Click to close</p>}
      </button>
      {hardDisplay === true ? (
        <div className="scroller">
          {alcoholCocktail.map((cocktail) => (
            <ResultCocktails
              key={cocktail.idDrink}
              cocktail={cocktail}
              handleChange={handleChange}
              handleChoosen={handleChoosen}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
