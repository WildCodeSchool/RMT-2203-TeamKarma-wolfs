import "../styles/cocktail.css";

export default function ResultCocktails({
  handleChoosen,
  cocktail,
  handleChange,
  setAlcoholCocktail,
}) {
  return (
    <div id={`${cocktail.idDrink}`} className="resultBox">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strDrink}</p>
      <button
        className="clickButton"
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

//APP -> Cocktails -> alcool && soft -> ResultCocktail -> CocktailShow
// faire une fonction qui au clique, va nous afficher CocktailShow
