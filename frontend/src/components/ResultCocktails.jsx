import "../styles/cocktail.css";

export default function ResultCocktails({ cocktail }) {
  return (
    <div id={`${cocktail.idDrink}`} className="resultBox">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strDrink}</p>
    </div>
  );
}
