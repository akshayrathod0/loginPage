import './App.css';
import ContactPage from './ContactPage/ContactPage';
import Login from './LoginPage/Login';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/contactus" element={<ContactPage />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
