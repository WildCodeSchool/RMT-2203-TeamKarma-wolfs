import SoftCocktails from "@components/SoftCocktails";
import "@styles/cocktail.css";
import AlcoholCocktail from "@components/AlcoholicCocktail";

export default function Cocktails() {
  return (
    <div className="cocktails-type">
      <AlcoholCocktail />
      <SoftCocktails />
    </div>
  );
}
