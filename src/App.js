import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
  );
}

export default App;
