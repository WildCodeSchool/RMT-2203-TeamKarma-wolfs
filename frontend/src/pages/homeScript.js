function searchMenu() {
  const ingredientsList = document.querySelectorAll(".ingredientsBox");
  let numSelected = 0;
  for (let i = 0; i < ingredientsList.length; i += 1) {
    const maxSelected = 3;
    let selectedIngredients = [];
    ingredientsList[i].addEventListener("click", function () {
      if (this.classList.contains("selected")) {
        this.classList.remove("selected");
        numSelected -= 1;
        selectedIngredients = document.querySelectorAll(".selected");
      } else if (numSelected < maxSelected) {
        this.classList.add("selected");
        numSelected += 1;
        selectedIngredients = document.querySelectorAll(".selected");
      } else {
        selectedIngredients = document.querySelectorAll(".selected");
      }
      for (let j = 0; j < 3; j += 1) {
        const ingredientToChange = document.querySelector(
          `.ingredient${j + 1}`
        );
        if (j < selectedIngredients.length) {
          const idString = selectedIngredients[j].id;
          if (selectedIngredients[j].id === "Anejo rum") {
            ingredientToChange.src = `https://www.thecocktaildb.com/images/ingredients/A%C3%B1ejo%20Rum-small.png`;
          } else {
            ingredientToChange.src = `https://www.thecocktaildb.com/images/ingredients/${idString}-small.png`;
          }
          ingredientToChange.alt = `${idString}`;
        } else {
          ingredientToChange.src = "../src/assets/img/svg/icon.svg";
          ingredientToChange.alt = "question mark";
        }
        if (ingredientToChange.alt !== "question mark") {
          ingredientToChange.classList.remove(`anim${j + 1}`);
          ingredientToChange.style.height = "80%";
        } else {
          ingredientToChange.classList.add(`anim${j + 1}`);
          ingredientToChange.style.height = "55%";
        }
      }
      console.log(numSelected + "/" + maxSelected);
    });
  }
}
searchMenu();
