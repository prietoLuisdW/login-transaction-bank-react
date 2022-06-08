import './App.css';
import './style.css'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { Landing } from './Components/Landing';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <div>

          
            <Landing />
          


        </div>
        <Footer />
      </div>


    </BrowserRouter>
  );
}
