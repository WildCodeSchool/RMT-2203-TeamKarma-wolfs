export default function DrinkIngredient({ drink }) {
  const ingredients = [];
  for (let i = 1; i <= 15; i += 1) {
    if (
      drink[`strIngredient${i}`] !== null &&
      drink[`strIngredient${i}`] !== ""
    ) {
      if (drink[`strMeasure${i}`] !== null) {
        ingredients.push({
          id: `${i}`,
          ingredientName: `${drink[`strIngredient${i}`]}`,
          ingredientMeasure: `(${drink[`strMeasure${i}`]})`,
        });
      } else {
        ingredients.push({
          id: `${i}`,
          ingredientName: `${drink[`strIngredient${i}`]}`,
          ingredientMeasure: ``,
        });
      }
    }
  }

  return (
    <>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>
          {ingredient.ingredientName} {ingredient.ingredientMeasure}
        </li>
      ))}
    </>
  );
}
