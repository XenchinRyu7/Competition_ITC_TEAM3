import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "./Loader";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthProvider";

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
