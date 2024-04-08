import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Login from "./Nike/Login/Login";
import { ChakraProvider } from "@chakra-ui/react";
// import App from "./App";
// import Details from "./Nike/Dashboard/Details";
// import App from "./App";s
// import Footer from "./Nike/Dashboard/Footer";
import App from "./App";
import Footer from "./Nike/Dashboard/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
