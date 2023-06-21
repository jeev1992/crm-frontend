import './App.css';
import Login from './pages/Login'
import Customer from './pages/Customer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
