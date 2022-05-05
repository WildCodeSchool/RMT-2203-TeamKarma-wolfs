import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Favorites from "@pages/Favorites";
import Random from "@pages/Random";
import Cocktails from "@pages/Cocktails";
import Shopping from "@pages/Shopping";

export default function Main({ loggedIn }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites loggedIn={loggedIn} />} />
        <Route path="/random" element={<Random />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/shopping" element={<Shopping loggedIn={loggedIn} />} />
      </Routes>
    </div>
  );
}
