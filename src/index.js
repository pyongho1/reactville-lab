import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);