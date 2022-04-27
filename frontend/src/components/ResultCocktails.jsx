export default function ResultCocktails({ cocktail }) {
  return (
    <div>
      <div id={`${cocktail.idDrink}`} className="resultBox">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <p>{cocktail.strDrink}</p>
      </div>
      )) )
    </div>
  );
}
