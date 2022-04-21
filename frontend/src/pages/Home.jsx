import "../styles/main.css";
import IngredientCard from "@components/IngredientCard";
import IngredientSelection from "@components/IngredientSelection";
import alcoholList from "@assets/alcohol.json";
import fruitsList from "@assets/fruits.json";
import softList from "@assets/soft.json";
import othersList from "@assets/others.json";
import { useState } from "react";

export default function Home() {
  const [ingredientSelect, setIngredientSelect] = useState([]);
  const handleIngredientSelect = (e, ingredientName) => {
    if (e.target.parentElement.parentElement.classList.contains("selected")) {
      e.target.parentElement.parentElement.classList.remove("selected");
      if (ingredientSelect.indexOf(ingredientName) !== -1) {
        if (ingredientSelect.length > 1) {
          const tempArray = [...ingredientSelect];
          tempArray.splice(tempArray.indexOf(ingredientName), 1);
          setIngredientSelect(tempArray);
        } else {
          setIngredientSelect([]);
        }
      } else {
        console.error("A problem occured while deselecting an ingredient");
      }
    } else if (ingredientSelect.length < 3) {
      e.target.parentElement.parentElement.classList.add("selected");
      if (ingredientSelect.length > 0) {
        setIngredientSelect([...ingredientSelect, ingredientName]);
      } else {
        setIngredientSelect([ingredientName]);
      }
    } else {
      console.warn("There are already 3 ingredients selected!");
      console.warn(`Ingredients : ${ingredientSelect}`);
    }
  };

  return (
    <div>
      <main>
        <div id="ingredients-finder">
          <div className="container">
            <div className="ingredients-box">
              <IngredientSelection ingredientSelect={ingredientSelect} />
            </div>
            <button className="select-button" type="button">
              Select
            </button>
          </div>

          <div className="ingredients-list">
            <div className="full-box">
              <h2>Fruits</h2>
              {fruitsList.map((fruit) => (
                <IngredientCard
                  key={fruit.name}
                  name={fruit.name}
                  url={fruit.url}
                  ingredientSelect={ingredientSelect}
                  handleIngredientSelect={handleIngredientSelect}
                />
              ))}
            </div>
            <div className="ingredients-alcohols">
              <div className="full-box">
                <h2>Alcohol</h2>
                {alcoholList.map((alcohol) => (
                  <IngredientCard
                    key={alcohol.name}
                    name={alcohol.name}
                    url={alcohol.url}
                    ingredientSelect={ingredientSelect}
                    handleIngredientSelect={handleIngredientSelect}
                  />
                ))}
              </div>
            </div>
            <div className="ingredients-soft">
              <div className="full-box">
                <h2>Soft</h2>
                {softList.map((item) => (
                  <IngredientCard
                    key={item.name}
                    name={item.name}
                    url={item.url}
                    ingredientSelect={ingredientSelect}
                    handleIngredientSelect={handleIngredientSelect}
                  />
                ))}
              </div>
            </div>
            <div className="ingredients-others">
              <div className="full-box">
                <h2>Others</h2>
                {othersList.map((other) => (
                  <IngredientCard
                    key={other.name}
                    name={other.name}
                    url={other.url}
                    ingredientSelect={ingredientSelect}
                    handleIngredientSelect={handleIngredientSelect}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="search-results">Results</div>
        </div>
      </main>
    </div>
  );
}
