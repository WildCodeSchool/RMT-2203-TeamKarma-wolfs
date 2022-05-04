import SoftCocktails from "@components/SoftCocktails";
import "../styles/cocktail.css";
import AlcoholCocktail from "../components/AlcoholicCocktail";
import CocktailShow from "../components/CocktailShow";
import { useState } from "react";

export default function Cocktails({ cocktail }) {
  const [cocktailResult, setCocktailResult] = useState(false);
  const [choosenCocktail, setChoosenCocktail] = useState("");
  const [cocktailId, setCocktailId] = useState("");

  function handleChange() {
    setCocktailResult(!cocktailResult);
  }
  function handleChoosen(e) {
    setChoosenCocktail(e);
  }
  return (
    <div>
      <div>
        <AlcoholCocktail
          handleChange={handleChange}
          handleChoosen={handleChoosen}
          setCocktailId={setCocktailId}
        />
        <SoftCocktails
          handleChange={handleChange}
          handleChoosen={handleChoosen}
        />
      </div>
      {cocktailResult ? (
        <div className="xx">
          <CocktailShow
            cocktailResult={cocktailResult}
            cocktail={choosenCocktail}
            id={cocktailId}
          />
        </div>
      ) : null}{" "}
    </div>
  );
}
