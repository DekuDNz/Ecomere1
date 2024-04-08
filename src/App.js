import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Dashboard from "../src/Nike/Dashboard/Dashboard.jsx";
import Login from "../src/Nike/Login/Login.jsx";
import Details from "../src/Nike/Dashboard/Details.jsx";
import Layout from "../src/Nike/Dashboard/Layout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          exact
          path="/Dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        ></Route>
        <Route
          exact
          path="/Details/:id"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
