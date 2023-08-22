import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/delivery-fee" element={<DeliveryFee />} />
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
