import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Random from "@pages/Random";
import Cocktails from "@pages/Cocktails";

export default function Main() {
  return (
    <div>
      <div className="slogan"><p>Choose your cocktail
      </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/shopping" element={<Home />} />
      </Routes>
      <div className="back-to-top-box">
        <a href="#top" className="back-to-top" title="Back to top" aria-label="Scroll to Top"></a>
      </div>
    </div>
  );
}
