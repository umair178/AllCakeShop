import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Auth from './Components/Auth/Auth';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
