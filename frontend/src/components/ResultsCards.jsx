import "../styles/main.css";
import { useEffect } from "react";

export default function ResultsCards({
  name,
  image,
  id,
  handleDisplay,
  setSearchButtonDisplay,
}) {
  useEffect(() => {
    setSearchButtonDisplay(true);
  }, []);

  return (
    <div id={`${id}`} className="resultBox">
      <img src={image} alt={name} value={id} />
      <p>{name}</p>
      <button
        className="recipeButton"
        type="button"
        value="recipeHidden"
        onClick={(e) => {
          handleDisplay(e);
        }}
      >
        See recipe
      </button>
    </div>
  );
}
