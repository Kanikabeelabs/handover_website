import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Retailer from "./Pages/Retailer";
import DeliveryPartners from "./Pages/DeliveryPartners";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
<<<<<<< HEAD
import Retailer from "./Pages/Retailer/Retailer";
import Blogs from "./Pages/Blogs/Blogs";
=======
import Aboutus from "./Pages/Aboutus/Aboutus";

>>>>>>> 0249dbe13a9d45a72229a48a736c51f3edf5f4ff
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/" element={<Home />} />
        <Route path="/delivery-fee" element={<DeliveryFee/>}/>
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
        <Route path="/retailer-section" element={<Retailer />} />
        <Route path="/blogs-section" element={<Blogs/>}/>
=======
        <Route path="/" element={<Home />} />
        <Route path="/retailer" element={<Retailer/>} />
        <Route path="/delivery-partner" element={<DeliveryPartners/>}/>
        <Route path="/delivery-fee" element={<DeliveryFee />} />
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
        <Route path="/about-us" element={<Aboutus />} />

>>>>>>> 0249dbe13a9d45a72229a48a736c51f3edf5f4ff
      </Routes>
    </BrowserRouter>
  );
}

export default App;
