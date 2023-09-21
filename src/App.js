import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Retailer from "./Pages/Retailer";
import DeliveryPartners from "./Pages/DeliveryPartners";
import DeliveryFee from "./Pages/DeliveryFee/DeliveryFee";
import DeliveryFeeForm from "./Pages/DeliveryFeeForm/DeliveryFeeForm";
import Aboutus from "./Pages/Aboutus/Aboutus";
import "./global.css";
import Blogs from "./Pages/blogs/Blogs";
import Description from "./Pages/blogs/Description";
import LocationInfo from "./Components/LocationInfo";
import TermsAndConditions from "./Pages/TermsAndConditions";
import HandoverBusinessApp from "./Pages/HandoverBusinessApp";
import HandoverRiderApp from "./Pages/HandoverRiderApp";
import BusinessAndRetailers from "./Pages/BusinessAndRetailers";

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
        <Route path="/location-info/:location?" element={<LocationInfo />} />
        <Route path="/rider-terms-condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy-handover-business-app" element={<HandoverBusinessApp />} />
        <Route path="/privacy-policy-handover-rider-app" element={<HandoverRiderApp />} />
        <Route path="/terms-business-retailers" element={<BusinessAndRetailers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
