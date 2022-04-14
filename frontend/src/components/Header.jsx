import { NavLink } from "react-router-dom";
import "../styles/Header.css";

import Logo from "@assets/img/svg/logo.svg";

export default function Header() {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "orange" };
    }
    return null;
  };

  return (
    <header>
      <div className="container">
        <nav id="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo cocktail finder" />
            <h1>
              <span>c</span>ocktail <br />
              <span>f</span>inder
            </h1>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink style={getActiveLinkStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={getActiveLinkStyle} to="/favorites">
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink style={getActiveLinkStyle} to="/ramdom">
                  Ramdom Cocktail
                </NavLink>
              </li>
              <li>
                <NavLink style={getActiveLinkStyle} to="/shopping">
                  Shopping list
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
