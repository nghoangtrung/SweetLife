import { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { Menu } from "./Pages/Menu";
import { Order } from "./Pages/Order";
import { Franchise } from "./Pages/Franchise";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import { Product } from "./Pages/Product";
import { Notification } from "./Components/Notification/Notification";
import { useNotification } from "./Context/NotificationContext";
import { Overlay } from "./Components/Overlay/Overlay";

function App() {
  const [theme, setTheme] = useState("brown");
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { notifications } = useNotification();

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <NavBar toggleOverlay={toggleOverlay} />
        <Routes>
          <Route
            path="/SweetLife"
            element={<Homepage currentTheme={theme} setTheme={setTheme} />}
          />
          <Route path="/SweetLife/menu" element={<Menu heading="Menu" />} />
          <Route
            path="/SweetLife/menu/signature_sundaes"
            element={
              <Menu category="signature_sundaes" heading="Signature Sundaes" />
            }
          />
          <Route
            path="/SweetLife/menu/cable_carfait"
            element={<Menu category="cable_carfait" heading="Cable Carfait™" />}
          />
          <Route
            path="/SweetLife/menu/bake_shoppe"
            element={<Menu category="bake_shoppe" heading="Bake Shoppe" />}
          />
          <Route
            path="/SweetLife/menu/shakin_frezin"
            element={
              <Menu category="shakin_frezin" heading="Shakin’ n Freezin’" />
            }
          />
          <Route
            path="/SweetLife/menu/ice_cream_scoops"
            element={
              <Menu category="ice_cream_scoops" heading="Ice Cream Scoops" />
            }
          />
          <Route
            path="/SweetLife/menu/toppings"
            element={<Menu category="toppings" heading="Toppings" />}
          />
          <Route
            path="/SweetLife/menu/kids_menu"
            element={<Menu category="kids_menu" heading="Kids Menu" />}
          />
          <Route path="/SweetLife/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/SweetLife/order" element={<Order />} />
          <Route path="/SweetLife/franchise" element={<Franchise />} />
          <Route path="/SweetLife/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
        {overlayVisible && <Overlay toggleOverlay={toggleOverlay} overlayVisible={overlayVisible} />}
        <div className="notification-container">
          {notifications.map((notif) => (
            <Notification
              key={notif.id}
              message={notif.message}
              type={notif.type}
              duration={notif.duration}
            />
          ))}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
