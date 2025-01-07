import { Route, Routes } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const RouterHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouterHandler;
