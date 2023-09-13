import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Retailer from "./Pages/Retailer";
import DeliveryPartners from "./Pages/DeliveryPartners";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import "./global.css";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Blogs from "./Pages/blogs/Blogs";
import Description from "./Pages/blogs/Description";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/delivery-partner" element={<DeliveryPartners />} />
        <Route path="/delivery-fee" element={<DeliveryFee />} />
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-description" element={<Description />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
