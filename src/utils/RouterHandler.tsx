import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import PaginationComponent from "../pages/PaginationComponent";

const RouterHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/pagination" element={<PaginationComponent />} />
      </Routes>
    </>
  );
};

export default RouterHandler;
