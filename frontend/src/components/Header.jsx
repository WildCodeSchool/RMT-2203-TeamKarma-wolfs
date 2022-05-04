import { NavLink } from "react-router-dom";
import "@styles/Header.css";

import Logo from "@assets/img/svg/logo.svg";

export default function Header() {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "var(--border-color)",
        borderTop: "3px solid var(--border-color)",
      };
    }
    return null;
  };

  return (
    <header id="top">
      <button type="button" id="loginButton">
        Login
      </button>
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
                <NavLink style={getActiveLinkStyle} to="/random">
                  Random Cocktail
                </NavLink>
              </li>
              <li>
                <NavLink style={getActiveLinkStyle} to="/cocktails">
                  Cocktails
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
