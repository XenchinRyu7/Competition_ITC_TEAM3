import { Routes, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import IndexAdmin from "../views/admin/Dashboard/IndexAdmin";
import SignIn from "../views/Authentication/SignIn";
import SignUp from "../views/Authentication/SignUp";
import Settings from "../views/admin/Settings";
import PostService from "../views/user/PostService";
import UserSettings from "../views/settings/UserSettings";
import Home from "../views/Home";
import DetailService from "../views/user/DetailService";
import Checkout from "../views/user/Checkout/Checkout";
import Orders from "../views/user/Orders";
import ListService from "../views/user/ListService";
import TableService from "../views/admin/table/TableService";
import TableTransaction from "../views/admin/table/TableTransaction";
import TableUser from "../views/admin/table/TableUser";
import UserService from "../views/user/UserService";
import TableCategory from "../components/Tables/category/TableCategory";
import UpdateService from "../views/user/UpdateService";

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
        <Route path="edit-service/:id" element={<UpdateService />} />
        <Route path="user-settings" element={<UserSettings />} />
        <Route path="detail/:id" element={<DetailService />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="list-service" element={<ListService />} />
        <Route path="service" element={<UserService />} />
        <Route path="orders" element={<Orders />} />
        <Route path="service" element={<UserService />} />
        <Route path="profile/:id" element={<UserSettings />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route index element={<IndexAdmin />} />
        <Route path="tables/user" element={<TableUser />} />
        <Route path="tables/transaction" element={<TableTransaction />} />
        <Route path="tables/service" element={<TableService />} />
        <Route path="tables/category" element={<TableCategory />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
