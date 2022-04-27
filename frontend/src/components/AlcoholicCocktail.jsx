import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/App.css";
import ResultCocktails from "@components/ResultCocktails";

export default function AlcoholCocktail() {
  const [alcoholCocktail, setAlcoholCocktail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.data)
      .then((data) => setAlcoholCocktail(data.drinks));
  }, []);

  return (
    <div>
      {alcoholCocktail.map((cocktail) => (
        <ResultCocktails key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}
