import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/index";
import CountryPage from "./pages/country";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/country/:country" element={<CountryPage />}></Route>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
