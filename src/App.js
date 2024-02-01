import './App.css';
import ContactPage from './ContactPage/ContactPage';
import Login from './LoginPage/Login';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PageNotFound from './Custome404Page/PageNotFound';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/contactus" element={<ContactPage />} /> 
    <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
