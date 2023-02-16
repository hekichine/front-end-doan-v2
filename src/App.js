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
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Register from "./components/Login/Register";
import AccountManager from "./components/Dashboard/User/AccountManager";
import { ToastContainer } from "react-toastify";
import Logout from "./components/Logout/Logout";
import Modal from "./components/Dashboard/Modal/Modal";
import ProductManager from "./components/Dashboard/Product/ProductManager/ProductManager";
import UserContent from "./components/Dashboard/User/UserContent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<PageContent />} />
          <Route path="account" element={<AccountManager />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Admin />} />
          <Route path="account" element={<UserContent />} />
          <Route path="account/detail" element={<Modal />} />
          <Route path="product" element={<ProductManager />} />
          <Route path="product/detail" element={<Modal />} />
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
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
