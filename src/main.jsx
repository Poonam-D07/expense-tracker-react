import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TransactionProvider from "./context/TransactionProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TransactionProvider>
          <App />
        </TransactionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);