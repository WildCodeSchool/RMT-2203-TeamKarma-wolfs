import SoftCocktails from "@components/SoftCocktails";
import "@styles/cocktail.css";
import AlcoholCocktail from "@components/AlcoholicCocktail";

export default function Cocktails() {
  return (
    <div>
      <div>
        <AlcoholCocktail />
        <SoftCocktails />
      </div>
    </div>
  );
}
