import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ECommerce from "../views/admin/Dashboard/ECommerce";
import Calendar from "../views/admin/Calendar";
import Profile from "../views/admin/Profile";
import SignIn from "../views/admin/Authentication/SignIn";
import SignUp from "../views/admin/Authentication/SignUp";
import FormElements from "../views/admin/Form/FormElements";
import Tables from "../views/admin/table/Tables";
import Settings from "../views/admin/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rute privat */}
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<ECommerce />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/forms/form-elements" element={<FormElements />} />
        <Route path="/forms/form-layout" element={<FormElements />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Rute publik */}
      <Route path="/auth" element={<PublicRoute />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
