import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Home />} />
        <Route path="/random" element={<Home />} />
        <Route path="/shopping" element={<Home />} />
      </Routes>
    </div>
  );
}
