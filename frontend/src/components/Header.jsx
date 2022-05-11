import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "@assets/img/svg/logo.svg";

export default function Header({
  loggedIn,
  loginHandle,
  logout,
  userHandler,
  user,
}) {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const displayLogin = () => {
    setShowLogin(!showLogin);
  };
  const displaySignup = () => {
    setShowSignup(!showSignup);
  };

  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      userHandler(window.localStorage.getItem("username"));
      loginHandle(true);
    }
  }, []);

  const sendLogin = () => {
    setShowLogin(!showLogin);
    const getAuth = axios
      .post(`https://project-2-teamkarma-wolfs.herokuapp.com/api/signIn`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((response) => response.data)
      .then((data) => {
        window.localStorage.setItem("userUuid", data.userUuid);
        window.localStorage.setItem("token", data.token);
      });
    getAuth.then(() => {
      axios
        .post(
          `https://project-2-teamkarma-wolfs.herokuapp.com/api/users/getUser`,
          {
            id: window.localStorage.getItem("userUuid"),
          },
          {
            headers: {
              Authorization: `AuthToken ${window.localStorage.getItem(
                "token"
              )}`,
            },
          }
        )
        .then((response) => response.data)
        .then((data) => {
          userHandler(data[0].username);
          window.localStorage.setItem("username", data[0].username);
          loginHandle(true);
        });
    });
  };

  const sendSignup = () => {
    setShowSignup(!showSignup);
    axios
      .post(`https://project-2-teamkarma-wolfs.herokuapp.com/api/signUp`, {
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
      })
      .then((response) => response.data)
      .then(() => {
        console.warn("User account created successfully");
      });
  };

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
    <header className="header" id="top">
      <div>
        <ul className="loginMenu">
          <li>
            {loggedIn === false ? (
              <button
                type="button"
                id="loginButton"
                onClick={() => displayLogin()}
              >
                Login
              </button>
            ) : (
              <button type="button" id="logoutButton" onClick={() => logout()}>
                Logout
              </button>
            )}
          </li>
          <li>
            <button
              type="button"
              id="signupButton"
              onClick={() => displaySignup()}
            >
              Signup
            </button>
          </li>
        </ul>
        {showLogin === false ? (
          <div className="dropdownLogin">
            <label htmlFor="email">
              Email{" "}
              <input
                type="text"
                id="email"
                name="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password{" "}
              <input
                type="password"
                id="password"
                name="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </label>

            <button type="button" onClick={() => sendLogin()}>
              Send
            </button>
          </div>
        ) : null}
        {showSignup === false ? (
          <div className="dropdownSignup">
            <label htmlFor="username">
              Username{" "}
              <input
                type="text"
                id="username"
                name="username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              Email{" "}
              <input
                type="text"
                id="email"
                name="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password{" "}
              <input
                type="password"
                id="password"
                name="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </label>

            <button type="button" onClick={() => sendSignup()}>
              Send
            </button>
          </div>
        ) : null}
      </div>
      <div className="container">
        <nav id="navbar">
          <div className="navbar-burger">
            <div className="containers nav-container">
              <input
                className="checkbox"
                type="checkbox"
                checked={checked}
                name=""
                id=""
                onChange={() => setChecked(!checked)}
              />
              <div className="hamburger-lines-mobile">
                <span className="line line1" />
                <span className="line line2" />
                <span className="line line3" />
              </div>
              <div className="logo">
                <img src={Logo} alt="Logo cocktail finder" />
                <h1>
                  <span>c</span>ocktail <br />
                  <span>f</span>inder
                </h1>
              </div>
              {user !== "" ? (
                <p className="welcomeMessage">Welcome back, {user}</p>
              ) : null}
              <div className="menu-burger">
                <ul>
                  <li>
                    <NavLink
                      style={getActiveLinkStyle}
                      to="/"
                      onClick={() => setChecked(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={getActiveLinkStyle}
                      to="/favorites"
                      onClick={() => setChecked(false)}
                    >
                      Favorites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={getActiveLinkStyle}
                      to="/random"
                      onClick={() => setChecked(false)}
                    >
                      Random Cocktail
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={getActiveLinkStyle}
                      to="/cocktails"
                      onClick={() => setChecked(false)}
                    >
                      Cocktails
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={getActiveLinkStyle}
                      to="/shopping"
                      onClick={() => setChecked(false)}
                    >
                      Shopping list
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-desktop">
            <div className="logo">
              <img src={Logo} alt="Logo cocktail finder" />
              <h1>
                <span>c</span>ocktail <br />
                <span>f</span>inder
              </h1>
            </div>
            {user !== "" ? (
              <p className="welcomeMessage">Welcome back, {user}</p>
            ) : null}
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
          </div>
        </nav>
      </div>
    </header>
  );
}
