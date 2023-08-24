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
<<<<<<< HEAD
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/" element={<Home />} />
        <Route path="/delivery-fee" element={<DeliveryFee/>}/>
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm/>}/>
        <Route path="/login" element={<Login />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/retailer" element={<Retailer/>} />
        <Route path="/delivery-fee" element={<DeliveryFee />} />
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
