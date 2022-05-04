import "@styles/cocktail.css";

export default function ResultCocktails({
  handleChoosen,
  cocktail,
  handleChange,
}) {
  return (
    <div id={`${cocktail.idDrink}`} className="resultBox">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strDrink}</p>
      <button
        className="recipeButton"
        type="button"
        onClick={() => {
          handleChoosen(cocktail);
          handleChange();
        }}
      >
        See Recipe
      </button>
    </div>
  );
}
