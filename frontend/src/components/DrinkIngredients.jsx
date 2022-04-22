export default function DrinkIngredient({ drink }) {
  const lis = [];
  for (let i = 1; i <= 15; i += 1) {
    if (drink[`strIngredient${i}`] != null) {
      lis.push({ ingredient: drink[`strIngredient${i}`], id: i });
    }
  }
  return (
    <>
      {lis.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.ingredient}</li>
      ))}
    </>
  );
}

// export default function DrinkIngredient({ drink }) {
//     const lis = [];
//     for (let i = 1; i <= 15; i += 1) {
//       if (drink.strIngredient[i] != null) {
//         lis.push(drink[`strIngredient${i}`]);
//       }
//     }
//     return (
//       <>
//         {lis.map((ingredient, idDrink) => (
//           <li key={idDrink}>{ingredient}</li>
//         ))}
//       </>
//     );
//   }
