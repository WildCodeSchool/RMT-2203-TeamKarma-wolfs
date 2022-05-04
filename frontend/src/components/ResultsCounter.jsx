import "@styles/main.css";
import { useEffect } from "react";

export default function ResultsCounter({
  results,
  easterEgg,
  toggleSearchResults,
  firstIngredient,
  buttonState,
  setButtonState,
}) {
  let counter = 0;
  if (easterEgg === true) {
    counter = results - 1;
  } else {
    counter = results;
  }

  useEffect(() => {
    const divIngredients = document.querySelector(".ingredients-list");
    if (
      firstIngredient !== undefined &&
      divIngredients.style.display === "none"
    ) {
      setButtonState("Reset");
    }
  }, []);

  return (
    <div id="resultsButton">
      <p>Results : {counter}</p>
      <button
        className="select-button"
        type="button"
        onClick={() => toggleSearchResults()}
        value="search"
      >
        {buttonState === "Search" ? "Search" : "Reset"}
      </button>
    </div>
  );
}
