import { Routes, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import ECommerce from "../views/admin/Dashboard/ECommerce";
import SignIn from "../views/Authentication/SignIn";
import SignUp from "../views/Authentication/SignUp";
import Tables from "../views/admin/table/Tables";
import Settings from "../views/admin/Settings";
import PostService from "../views/user/PostService";
import UserSettings from "../views/settings/UserSettings";
import Home from "../views/Home";
import DetailService from "../views/user/DetailService";
import Checkout from "../views/user/Checkout/Checkout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/auth" element={<AuthRoute />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="/user" element={<UserRoute />}>
        <Route path="post-service" element={<PostService />} />
        <Route path="user-settings" element={<UserSettings />} />
        <Route path="details" element={<DetailService />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route index element={<ECommerce />} />
        <Route path="tables/user" element={<Tables />} />
        <Route path="tables/transaction" element={<Tables />} />
        <Route path="tables/service" element={<Tables />} />
        <Route path="tables/category" element={<Tables />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
