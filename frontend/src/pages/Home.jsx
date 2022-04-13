import "../services/main.css";

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
              <div className="ingredient-box fruits-1 dede">
                <img src="img/Carrot-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-2 dede">
                <img src="img/Cherry-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-3 dede">
                <img src="img/Ginger-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-4 dede">
                <img src="img/lemon.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-5 dede">
                <img src="img/Mint-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-6 dede">
                <img src="img/Pineapple.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-7 dede">
                <img src="img/Strawberries.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-8ded">
                <img src="img/Mango-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-9 dede">
                <img src="img/Lime-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-10 dede">
                <img src="img/Strawberries.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-1 dede">
                <img src="img/Carrot-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-2 dede">
                <img src="img/Cherry-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-3 dede">
                <img src="img/Ginger-Medium.png" alt="fraise" />
              </div>
              <div className="ingredient-box fruits-8 dede">
                <img src="img/Mango-Medium.png" alt="fraise" />
              </div>
            </div>
            <div className="ingredients-alcohols">
              <h2>Alcohol</h2>
              <div className="boxs ingredients-fruits">
                <div className="ingredient-box fruits-1">
                  <img src="img/Carrot-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-2">
                  <img src="img/Cherry-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-3">
                  <img src="img/Ginger-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-4">
                  <img src="img/lemon.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-5">
                  <img src="img/Mint-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-6">
                  <img src="img/Pineapple.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-7">
                  <img src="img/Strawberries.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-8">
                  <img src="img/Mango-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-9">
                  <img src="img/Lime-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-10">
                  <img src="img/Strawberries.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-3">
                  <img src="img/Ginger-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-4">
                  <img src="img/lemon.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-5">
                  <img src="img/Mint-Medium.png" alt="fraise" />
                </div>
                <div className="ingredient-box fruits-9">
                  <img src="img/Lime-Medium.png" alt="fraise" />
                </div>
              </div>
            </div>
            <div className="ingredients-soft">
              <h2>Soft</h2>
              <div className="boxs ingredients-soft">Soft items</div>
            </div>
            <div className="ingredients-others">
              <h2>Others</h2>
              <div className="boxs ingredients-others">Other items</div>
            </div>
          </div>
          <div className="search-results">Results</div>
        </div>
      </main>
    </div>
  );
}
