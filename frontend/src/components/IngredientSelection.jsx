export default function IngredientSelection({ ingredientSelect }) {
  const ingredientSelectFix = [...ingredientSelect];
  if (ingredientSelectFix.indexOf("Anejo rum") !== -1) {
    ingredientSelectFix.splice(
      ingredientSelectFix.indexOf("Anejo rum"),
      1,
      "A%C3%B1ejo%20Rum"
    );
  }
  while (ingredientSelectFix.length < 3) {
    ingredientSelectFix.push("0");
  }
  while (ingredientSelectFix.indexOf("0") !== -1) {
    ingredientSelectFix.splice(
      ingredientSelectFix.indexOf("0"),
      1,
      "question mark"
    );
  }
  const displayIngredient = [];
  for (let i = 0; i < 3; i += 1) {
    displayIngredient.push({
      ingredientName: `${
        ingredientSelectFix[i] === "A%C3%B1ejo%20Rum"
          ? `Anejo Rum`
          : ingredientSelectFix[i]
      }`,
      ingredientImage: `${
        ingredientSelectFix[i] === "question mark"
          ? `../src/assets/img/svg/icon.svg`
          : `https://www.thecocktaildb.com/images/ingredients/${ingredientSelectFix[i]}-small.png`
      }`,
    });
    const ingredientImg = document.querySelectorAll(".ingredient-box img");
    for (let j = 0; j < 3; j += 1) {
      if (ingredientSelectFix[j] === "question mark") {
        ingredientImg[j].style.height = "55%";
      } else {
        ingredientImg[j].style.height = "80%";
      }
    }
  }

  return (
    <>
      <div className="ingredient-box">
        <img
          className={`${
            displayIngredient[0].ingredientName === "question mark"
              ? `ingredient1 anim1`
              : `ingredient1`
          }`}
          src={displayIngredient[0].ingredientImage}
          alt={displayIngredient[0].ingredientName}
        />
      </div>
      <div className="ingredient-box">
        <img
          className={`${
            displayIngredient[1].ingredientName === "question mark"
              ? `ingredient2 anim2`
              : `ingredient2`
          }`}
          src={displayIngredient[1].ingredientImage}
          alt={displayIngredient[1].ingredientName}
        />
      </div>
      <div className="ingredient-box">
        <img
          className={`${
            displayIngredient[2].ingredientName === "question mark"
              ? `ingredient3 anim3`
              : `ingredient3`
          }`}
          src={displayIngredient[2].ingredientImage}
          alt={displayIngredient[2].ingredientName}
        />
      </div>
    </>
  );
}
