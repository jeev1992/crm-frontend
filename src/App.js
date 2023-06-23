import './App.css';
import Login from './pages/Login'
import Customer from './pages/Customer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui/dist/js/coreui.min.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {localStorage.getItem("userTypes") === "CUSTOMER" && <Route path="/customer" element={<Customer/>} />}
      </Routes>
    </Router>
  );
}

export default App;
