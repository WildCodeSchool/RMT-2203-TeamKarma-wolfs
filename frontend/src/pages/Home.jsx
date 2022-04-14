import "../services/main.css";
import IngredientCard from "@components/IngredientCard";
import alcoholList from "@assets/alcohol.json";
import fruitsList from "@assets/fruits.json";
import softList from "@assets/soft.json";
import othersList from "@assets/others.json";

export default function Home() {
  return (
    <div>
      <main>
        <div id="ingredients-finder">
          <div className="container">
            <div className="ingredients-box">
              <div className="ingredient-box ingredient1">
                <img src="img/Strawberries.png" alt="fraise" />
              </div>
              <div className="ingredient-box ingredient2">
                <img src="img/lemon.png" alt="fraise" />
              </div>
              <div className="ingredient-box ingredient3">
                <img src="img/Mint-Medium.png" alt="fraise" />
              </div>
            </div>
            <button type="button">Bouton</button>
          </div>

          <div className="ingredients-list">
            <h2>Fruits</h2>
            <div className="boxs ingredients-fruits">
              {fruitsList.map((fruit) => (
                <IngredientCard
                  key={fruit.name}
                  name={fruit.name}
                  url={fruit.url}
                />
              ))}
            </div>
            <div className="ingredients-alcohols">
              <h2>Alcohol</h2>
              <div className="boxs ingredients-fruits">
                {alcoholList.map((alcohol) => (
                  <IngredientCard
                    key={alcohol.name}
                    name={alcohol.name}
                    url={alcohol.url}
                  />
                ))}
              </div>
            </div>
            <div className="ingredients-soft">
              <h2>Soft</h2>
              <div className="boxs ingredients-soft">
                {softList.map((item) => (
                  <IngredientCard
                    key={item.name}
                    name={item.name}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div className="ingredients-others">
              <h2>Others</h2>
              <div className="boxs ingredients-others">
                {othersList.map((other) => (
                  <IngredientCard
                    key={other.name}
                    name={other.name}
                    url={other.url}
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
