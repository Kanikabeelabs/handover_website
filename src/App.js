import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
<<<<<<< HEAD
import Blogs from "./Pages/blogs/Blogs";
import Aboutus from "./Pages/Aboutus/Aboutus";
=======
import AboutUs from "./Pages/AboutUs/AboutUs";
>>>>>>> 19435d0d4f381a2fe8c380d44ecffe639a8973b5
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import Login from "./Pages/LogIn/Login";
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/delivery-fee" element={<DeliveryFee />} />
        <Route path="/delivery-fee-form" element={<DeliveryFeeForm />} />
>>>>>>> 19435d0d4f381a2fe8c380d44ecffe639a8973b5
      </Routes>
    </BrowserRouter>
  );
}

export default App;
