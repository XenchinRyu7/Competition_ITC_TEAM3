import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import RouterHandler from "./utils/RouterHandler.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      <RouterHandler />
    </StrictMode>
  </BrowserRouter>
);
