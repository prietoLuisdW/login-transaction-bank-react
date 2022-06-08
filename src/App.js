import './App.css';
import './style.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>


        <Footer />
      </div>


    </BrowserRouter>
  );
}
