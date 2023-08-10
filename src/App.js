import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery-fee" element={<DeliveryFee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
