import axios from "axios";
import { useState, useEffect } from "react";
import "@styles/App.css";
import ResultCocktails from "@components/ResultCocktails";

export default function SoftCocktails() {
  const [softCocktail, setSoftCocktail] = useState([]);
  const [softDisplay, setSoftDisplay] = useState(null);

  const setDisplay = () => {
    if (softDisplay === null) {
      setSoftDisplay(true);
    } else {
      setSoftDisplay(null);
    }
  };
  useEffect(() => {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      )
      .then((response) => response.data)
      .then((data) => setSoftCocktail(data.drinks));
  }, []);

  return (
    <div className="show-cocktails">
      <button
        type="button"
        onClick={() => setDisplay()}
        onKeyDown={() => setDisplay()}
      >
        <h2>Soft Cocktails</h2>
        {softDisplay === null ? <p>Click to expand</p> : <p>Click to close</p>}
      </button>
      {softDisplay === true ? (
        <div className="scroller">
          {softCocktail.map((cocktail) => (
            <ResultCocktails key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
