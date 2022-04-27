import "../styles/main.css";
import IngredientCard from "@components/IngredientCard";
import IngredientSelection from "@components/IngredientSelection";
import ResultsCards from "@components/ResultsCards";
import alcoholList from "@assets/alcohol.json";
import fruitsList from "@assets/fruits.json";
import softList from "@assets/soft.json";
import othersList from "@assets/others.json";
import { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "@components/CocktailCard";

export default function Home() {
  const [ingredientSelect, setIngredientSelect] = useState([]);
  const [firstIngredient, setFirstIngredient] = useState("");
  const [secondIngredient, setSecondIngredient] = useState("");
  const [thirdIngredient, setThirdIngredient] = useState("");
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);
  const [results3, setResults3] = useState([]);
  const [cocktailResults, setCocktailResults] = useState(false);
  const [displayRecipe, setDisplayRecipe] = useState(false);
  const [selectedId, setSelectedId] = useState("");

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

  const sampleCall = {
    drinks: [
      {
        strDrink: "155 Belmont",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        idDrink: "15346",
      },
      {
        strDrink: "155 Belmont",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        idDrink: "15347",
      },
      {
        strDrink: "155 Belmont",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        idDrink: "15348",
      },
      {
        strDrink: "155 Belmont",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        idDrink: "15349",
      },
    ],
  };
  const easterEgg = [
    {
      strDrink: 'Meme cocktail a.k.a "The Easter Egg"',
      strDrinkThumb: `../src/assets/img/trollface.png`,
      idDrink: "1337",
    },
  ];
  const [filteredResults, setFilteredResults] = useState(sampleCall.drinks);

  useEffect(() => {
    setFirstIngredient(ingredientSelect[0]);
  }, [ingredientSelect[0]]);
  useEffect(() => {
    setSecondIngredient(ingredientSelect[1]);
  }, [ingredientSelect[1]]);
  useEffect(() => {
    setThirdIngredient(ingredientSelect[2]);
  }, [ingredientSelect[2]]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${firstIngredient}`,
        { signal }
      )
      .then((response) => response.data)
      .then((data) => {
        setResults1(data.drinks);
      })
      .catch(() => {});

    return function cleanup() {
      controller.abort();
    };
  }, [firstIngredient]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${secondIngredient}`,
        { signal }
      )
      .then((response) => response.data)
      .then((data) => {
        setResults2(data.drinks);
      })
      .catch(() => {});

    return function cleanup() {
      controller.abort();
    };
  }, [secondIngredient]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${thirdIngredient}`,
        { signal }
      )
      .then((response) => response.data)
      .then((data) => {
        setResults3(data.drinks);
      })
      .catch(() => {});

    return function cleanup() {
      controller.abort();
    };
  }, [thirdIngredient]);

  function searchCocktails() {
    if (
      typeof results1 !== "undefined" &&
      typeof results2 !== "undefined" &&
      typeof results3 !== "undefined"
    ) {
      const searchResult = [];
      const list1 = results1.map((elem) => elem.strDrink);
      const list2 = results2.map((elem) => elem.strDrink);
      const list3 = results3.map((elem) => elem.strDrink);
      searchResult.push(list1, list2, list3);
      const filter = searchResult
        .shift()
        .filter((v) => searchResult.every((a) => a.indexOf(v) !== -1));
      const displayResults = [];
      for (let i = 0; i < filter.length; i += 1) {
        const idToAdd = results1.findIndex(
          (cocktail) => cocktail.strDrink === filter[i]
        );
        displayResults.push(results1[idToAdd]);
      }
      setFilteredResults(displayResults);
    } else if (
      typeof results1 !== "undefined" &&
      typeof results2 !== "undefined"
    ) {
      const searchResult = [];
      const list1 = results1.map((elem) => elem.strDrink);
      const list2 = results2.map((elem) => elem.strDrink);
      searchResult.push(list1, list2);
      const filter = searchResult
        .shift()
        .filter((v) => searchResult[0].indexOf(v) !== -1);
      const displayResults = [];
      for (let i = 0; i < filter.length; i += 1) {
        const idToAdd = results1.findIndex(
          (cocktail) => cocktail.strDrink === filter[i]
        );
        displayResults.push(results1[idToAdd]);
      }
      setFilteredResults(displayResults);
    } else if (typeof results1 !== "undefined") {
      setFilteredResults(results1);
    } else {
      setFilteredResults(easterEgg);
    }
  }

  const handleCocktailResults = () => {
    setCocktailResults(!cocktailResults);
  };
  const handleDisplay = (e) => {
    setDisplayRecipe(!displayRecipe);
    if (e.target.parentElement.id) {
      setSelectedId(e.target.parentElement.id);
      handleCocktailResults();
    } else {
      handleCocktailResults();
    }
  };

  const toggleSearchResults = (e) => {
    const divIngredients = document.querySelector(".ingredients-list");
    if (e.target.value === "search") {
      divIngredients.style.display = "none";
      e.target.value = "reset";
      e.target.textContent = "Reset";
      searchCocktails();
      handleCocktailResults();
    } else if (e.target.value === "reset") {
      divIngredients.style.display = "block";
      e.target.value = "search";
      e.target.textContent = "Search";
      handleCocktailResults();
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
            <button
              className="select-button"
              type="button"
              onClick={(e) => toggleSearchResults(e)}
              value="search"
            >
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
          {cocktailResults === true ? (
            <div className="search-results">
              <h2>Cocktails results</h2>
              {filteredResults.map((elem) => (
                <ResultsCards
                  key={elem.idDrink}
                  id={elem.idDrink}
                  name={elem.strDrink}
                  image={elem.strDrinkThumb}
                  handleDisplay={handleDisplay}
                  displayRecipe={displayRecipe}
                />
              ))}
            </div>
          ) : null}
          {displayRecipe === true ? (
            <div className="cocktail-display">
              <h2>Cocktails recipe</h2>
              <CocktailCard handleDisplay={handleDisplay} id={selectedId} />
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
