export default function DrinkIngredient({ drink }) {
  const ingredients = [];
  for (let i = 1; i <= 15; i += 1) {
    if (drink[`strIngredient${i}`] != null) {
      ingredients.push({ ingredient: drink[`strIngredient${i}`], id: i });
    }
  }
  return (
    <>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.ingredient}</li>
      ))}
    </>
  );
}
