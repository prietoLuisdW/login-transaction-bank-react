import React, { useState } from "react";
import LogoBF from '../Utilities/logoBancoFalabella.png'
import { Header, ImgBrand} from "../Elements/Nav";
import { Datos } from "../Elements/Datos";

export function NavBar (){
    
    
    return(
        <Header>
            <ImgBrand src={LogoBF}/>
            <nav>
                <h1>Fecha y Hora: {Datos.time}</h1>
                <h1>Codigo Único CUS: {Datos.cus}</h1>
            </nav>
        </Header>
    )
}