import './App.css';
import './style.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FomrLog } from './Components/FormLog';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <FomrLog/>
      </div>
    </BrowserRouter>
  );
}
