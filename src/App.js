import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./components/ShopPages/ShopPage";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Dashboard/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Admin />} />
        </Route>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
