import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProxyPage from "./components/ProxyPage.jsx";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/proxy" element={<ProxyPage />} />
        <Route path="/register" element={<Register />} />
        {/* Optionally, redirect root to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
