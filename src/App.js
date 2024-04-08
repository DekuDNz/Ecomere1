import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./Component/Home.jsx";
import NavBar from "./Component/NavBar.jsx";
import Cart from "./Component/Cart.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/NavBar" element={<NavBar />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
