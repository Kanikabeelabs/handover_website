import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aboutus />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
