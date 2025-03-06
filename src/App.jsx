import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./operations/home/home";
import { Increment } from "./operations/increment/increment"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/increment" element={<Increment />} />
      </Routes>
    </BrowserRouter>
  );
};

