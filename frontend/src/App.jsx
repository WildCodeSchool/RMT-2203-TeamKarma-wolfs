import Main from "@components/Main";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useState } from "react";

import "@styles/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const userHandler = (value) => {
    setUser(value);
  };

  const loginHandle = (value) => {
    setLoggedIn(value);
  };
  const logout = () => {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("userUuid");
    window.localStorage.removeItem("token");
    setUser("");
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        loginHandle={loginHandle}
        logout={logout}
        userHandler={userHandler}
        user={user}
      />
      <Main loggedIn={loggedIn} />
      <Footer />
    </div>
  );
}

export default App;
