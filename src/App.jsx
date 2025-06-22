import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProxyPage from "./components/ProxyPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/proxy" element={<ProxyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
