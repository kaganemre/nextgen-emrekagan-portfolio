import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
    <ToastContainer />
  </StrictMode>
);
