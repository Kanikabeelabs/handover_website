import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/blogs/Blogs";
import Aboutus from "./Pages/Aboutus/Aboutus";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import Login from "./Pages/LogIn/Login";
import "./global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/" element={<Home />} />
        <Route path="/delivery-fee" element={<DeliveryFee/>}/>
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
