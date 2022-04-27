import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/App.css";
import ResultCocktails from "@components/ResultCocktails";

export default function SoftCocktails() {
  const [softCocktail, setSoftCocktail] = useState([]);
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
      <h2>Soft Cocktails</h2>
      <div className="scroller">
        {softCocktail.map((cocktail) => (
          <ResultCocktails key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}
