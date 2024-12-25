import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import { NotificationProvider } from "./Context/NotificationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </NotificationProvider>
  </StrictMode>
);
