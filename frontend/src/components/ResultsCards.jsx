export default function ResultsCards({ name, image, id }) {
  return (
    <div id={`${name}`} className="resultBox">
      <img src={image} alt={name} value={id} />
      <p>{name}</p>
    </div>
  );
}
