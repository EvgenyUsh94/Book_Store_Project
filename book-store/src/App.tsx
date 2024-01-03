import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Login from "./pages/login"
import LandingPage from './pages/landingPage/LandingPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
