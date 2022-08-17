import './style.css'
import React from 'react';
import { Footer } from './Components/Footer';
import Login from './Pages/Login';
import Step1 from './Pages/Step1';
import { NavBar } from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step2 from './Pages/Step2';
import Step3 from './Pages/Step3';


export default function App() {
    return (
        <Router>
        <main>
            <NavBar />
            <Routes>
                <Route path='login/*' element={<Login />}/>
                <Route path='step1/' element={ <Step1 /> }/>    
                <Route path='step2/' element={ <Step2 /> }/>    
                <Route path='step3/' element={ <Step3 /> }/>    
                <Route path='resumen/' element={<div>Resumen</div>}/>    
            </Routes>

            <Footer />
        </main> 
        </Router>  
    );
}
