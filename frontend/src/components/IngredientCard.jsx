export default function IngredientCard({ name, url }) {
  return (
    <div id={`ingredient${name}`} className="box">
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
}
