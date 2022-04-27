export default function ResultsCounter({ results, easterEgg }) {
  let counter = 0;
  if (easterEgg === true) {
    counter = results - 1;
  } else {
    counter = results;
  }

  return <p id="counter">Résultats : {counter}</p>;
}
