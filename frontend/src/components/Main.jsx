import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Random from "@pages/Random";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/shopping" element={<Home />} />
      </Routes>
    </div>
  );
}
