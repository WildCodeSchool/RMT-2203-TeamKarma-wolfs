import Logo from "@assets/img/svg/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div id="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo cocktail finder" />
            <h1>Cocktail Finder</h1>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Favorites</li>
              <li>Random Cocktail</li>
              <li>Shopping List</li>
              <li>Work in progress</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
