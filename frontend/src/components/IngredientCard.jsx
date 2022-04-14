export default function IngredientCard({ name, url }) {
  return (
    <div id={`ingredient${name}`}>
      <img src={url} alt={name} />
    </div>
  );
}
