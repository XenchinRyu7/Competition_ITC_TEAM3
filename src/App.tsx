import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./Loader";
// import PageTitle from "./components/PageTitle";
// import SignIn from "./views/admin/Authentication/SignIn";
// import SignUp from "./views/admin/Authentication/SignUp";
// import Calendar from "./views/admin/Calendar";
// import Chart from "./views/admin/Chart";
// import ECommerce from "./views/admin/Dashboard/ECommerce";
// import FormElements from "./views/admin/Form/FormElements";
// import FormLayout from "./views/admin/Form/FormLayout";
// import Profile from "./views/admin/Profile";
// import Settings from "./views/admin/Settings";
// import Tables from "./views/admin/table/Tables";
// import Alerts from "./views/admin/UiElements/Alerts";
// import Buttons from "./views/admin/UiElements/Buttons";
import DefaultLayout from "./layout/DefaultLayout";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layout/AuthLayout";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
