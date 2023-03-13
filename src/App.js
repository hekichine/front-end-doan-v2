import "./App.css";
import { Routes, Route } from "react-router-dom";

import ShopPage from "./components/ShopPages/ShopPage";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Dashboard/Admin";
import PageContent from "./components/HomePage/PageContent";
import NotFound from "./components/404NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Register from "./components/Login/Register";
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout/Logout";
import ProductManager from "./components/Dashboard/Product/ProductManager/ProductManager";
import UserContent from "./components/Dashboard/User/UserContent";
import Account from "./components/Account/Account";
import Order from "./components/Dashboard/Order/Order";
import Category from "./components/Dashboard/Category/Category";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<PageContent />} />
          <Route path="account/:uid" element={<Account />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Admin />} />
          <Route path="account" element={<UserContent />} />
          <Route path="product" element={<ProductManager />} />
          <Route path="order" element={<Order />} />
          <Route path="category" element={<Category />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
