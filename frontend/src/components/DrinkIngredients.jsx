export default function DrinkIngredient({ drink }) {
  const ingredients = [];
  for (let i = 1; i <= 15; i += 1) {
    if (
      drink[`strIngredient${i}`] !== null &&
      drink[`strIngredient${i}`] !== ""
    ) {
      ingredients.push({
        id: `${i}`,
        ingredientName: `${drink[`strIngredient${i}`]}`,
        ingredientMeasure: `${drink[`strMeasure${i}`]}`,
      });
    }
  }

  return (
    <>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>
          {ingredient.ingredientName} ({ingredient.ingredientMeasure})
        </li>
      ))}
    </>
  );
}
// {ingredient.ingredient}
// { ingredient: drink[`strIngredient${i}`], id: i });
