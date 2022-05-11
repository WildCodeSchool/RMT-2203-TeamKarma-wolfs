import { useState } from "react";
import SoftCocktails from "@components/SoftCocktails";
import "@styles/cocktail.css";
import AlcoholCocktail from "@components/AlcoholicCocktail";
import CocktailShow from "@components/CocktailShow";

export default function Cocktails() {
  const [cocktailResult, setCocktailResult] = useState(false);
  const [choosenCocktail, setChoosenCocktail] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState(true);

  const handleChange = () => {
    setCocktailResult(!cocktailResult);
  };
  const handleChoosen = (e) => {
    setChoosenCocktail(e);
  };
  const handleClick = () => {
    setButtonDisplay(!buttonDisplay);
  };

  return (
    <div>
      {" "}
      {cocktailResult === true ? (
        <div className="xx">
          <CocktailShow
            setButtonDisplay={setButtonDisplay}
            handleClick={handleClick}
            buttonDisplay={buttonDisplay}
            cocktailResult={cocktailResult}
            cocktail={choosenCocktail}
            handleChange={handleChange}
          />
        </div>
      ) : null}{" "}
      <div>
        {buttonDisplay === true ? (
          <div>
            <AlcoholCocktail
              handleChange={handleChange}
              handleChoosen={handleChoosen}
            />
            <SoftCocktails
              handleChange={handleChange}
              handleChoosen={handleChoosen}
            />
          </div>
        ) : null}
      </div>
      <div className="back-to-top-box">
        <a
          href="#top"
          className="back-to-top"
          title="Back to top"
          aria-label="Scroll to Top"
        >
          Up
        </a>
      </div>
    </div>
  );
}
