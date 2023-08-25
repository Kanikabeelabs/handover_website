import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Retailer from "./Pages/Retailer";
import DeliveryPartners from "./Pages/DeliveryPartners";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import Aboutus from "./Pages/Aboutus/Aboutus";

import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retailer" element={<Retailer/>} />
        <Route path="/delivery-partner" element={<DeliveryPartners/>}/>
        <Route path="/delivery-fee" element={<DeliveryFee />} />
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
        <Route path="/about-us" element={<Aboutus />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
