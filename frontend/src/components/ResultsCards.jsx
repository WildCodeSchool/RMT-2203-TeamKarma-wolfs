import "../styles/main.css";

export default function ResultsCards({
  name,
  image,
  id,
  handleDisplay,
  counterDivToggle,
}) {
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
          counterDivToggle();
        }}
      >
        See recipe
      </button>
    </div>
  );
}
