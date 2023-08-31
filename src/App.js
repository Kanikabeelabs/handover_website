import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Aboutus/Aboutus";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import Retailer from "./Pages/Retailer/Retailer";
import Blogs from "./Pages/Blogs/Blogs";
import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/" element={<Home />} />
        <Route path="/delivery-fee" element={<DeliveryFee/>}/>
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
        <Route path="/retailer-section" element={<Retailer />} />
        <Route path="/blogs-section" element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
