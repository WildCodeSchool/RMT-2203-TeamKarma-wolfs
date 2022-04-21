export default function IngredientCard({ name, url, handleIngredientSelect }) {
  return (
    <div id={`${name}`} className="box ingredientsBox">
      <button
        className="ingredientButton"
        type="button"
        onClick={(e) => handleIngredientSelect(e, name)}
        onKeyDown={(e) => handleIngredientSelect(e, name)}
      >
        <img src={url} alt={name} />
      </button>
      <p>{name}</p>
    </div>
  );
}
