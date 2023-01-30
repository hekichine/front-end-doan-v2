import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./components/ShopPages/ShopPage";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exec element={<ShopPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
