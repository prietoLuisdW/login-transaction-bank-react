import './style.css'
import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header, ImgBrand } from './Elements/Nav'
import LogoBF from './Utilities/logoBancoFalabella.png'
import Login from './Pages/Login';


export default function App() {

    const [time]=useState('Martes 14 Junio 2022 17:30')
    const [cus]=useState('1234567')

    return (
        <main>
            <Header>
                <ImgBrand src={LogoBF}/>
                <nav>
                    <h1 >Fecha y Hora: {time}</h1>
                    <h1 >Codigo Único CUS: {cus}</h1>
                </nav>
            </Header>

            <Login />

            <Footer />
        </main>   
    );
}
