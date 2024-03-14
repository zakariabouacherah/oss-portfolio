import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Branding1 from "./components/branding/Branding1.jsx";
import Navbar from "./components/Navbar.jsx";
import Branding2 from "./components/branding/Branding2.jsx";
import Branding3 from "./components/branding/Branding3.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cotralog" element={<Branding1 />} />
          <Route path="/ensueno" element={<Branding2 />} />
          <Route path="/rci" element={<Branding3 />} />
        </Routes>
        <Footer />
      </Router>
    </Layout>
    <Toaster
      position="top-center"
      // containerClassName="bg-[#aac4e7]"
      // containerStyle={{ background: "#292929", color: "#aac4e7" }}
    />
  </React.StrictMode>
);
