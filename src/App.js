import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./components/ShopPages/ShopPage";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Dashboard/Admin";
import PageContent from "./components/HomePage/PageContent";
import NotFound from "./components/404NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<PageContent />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Admin />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
