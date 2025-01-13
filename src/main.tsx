import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "flowbite";

const injectMidtransScript = () => {
  const script = document.createElement("script");
  script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
  script.setAttribute("data-client-key", "SB-Mid-client-3vrMaKp-jUZFe2-_");
  document.body.appendChild(script);
};

injectMidtransScript();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
