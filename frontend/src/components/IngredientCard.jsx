export default function IngredientCard({ name, url }) {
  return (
    <div id={`${name}`} className="box ingredientsBox">
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
}
