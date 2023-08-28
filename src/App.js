import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
<<<<<<< HEAD
import AboutUs from "./Pages/AboutUs/AboutUs";
=======
import Retailer from "./Pages/Retailer";
import DeliveryPartners from "./Pages/DeliveryPartners";
>>>>>>> 3ade46bb5375720ce61034befe3841e21e6a7aa1
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import Retailer from "./Pages/Retailer/Retailer";
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
