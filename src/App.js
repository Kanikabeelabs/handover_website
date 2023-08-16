import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/blogs/Blogs";
import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
