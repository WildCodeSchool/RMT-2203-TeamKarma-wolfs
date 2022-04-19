// import "@styles/CocktailCard.css";
// import "@styles/App.css";
import "../styles/CocktailCard.css";

export default function CocktailCard() {
  return (
    <section className="cocktail-card">
      <div className="container">
        <div className="card-box">
          <h2 className="cocktail-name">my cocktail</h2>
          <div className="card-top">
            <div className="ingredients">
              <h3>Ingrédients</h3>
              <p>blablabla</p>
            </div>
            <div className="card-img">
              <p>hgfjh</p>
            </div>
          </div>
          <div className="card-bottom">
            <h3>Recipe</h3>
            <p>djhjkghd</p>
          </div>
          <button type="button" className="card-btn">
            Random
          </button>
        </div>
      </div>
    </section>
  );
}
