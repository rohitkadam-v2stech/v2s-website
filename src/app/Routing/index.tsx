import { Route, Routes } from "react-router-dom";
import Home from "../modules/Home";
import AboutUs from "../modules/AboutUs";

const RoutingProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default RoutingProvider;
