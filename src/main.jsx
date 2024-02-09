import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Branding1 from "./components/branding/Branding1.jsx";
import Navbar from "./components/Navbar.jsx";
import Branding2 from "./components/branding/Branding2.jsx";
import Branding3 from "./components/branding/Branding3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cotralog" element={<Branding1 />} />
        <Route path="/ensueno" element={<Branding2 />} />
        <Route path="/rci" element={<Branding3 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
