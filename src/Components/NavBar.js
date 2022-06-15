import React from "react";
import LogoBF from '../Utilities/logoBancoFalabella.png'
import { Header, ImgBrand} from "../Elements/Nav";

export function NavBar (cus, time){
    return(
        <Header>
            <ImgBrand src={LogoBF}/>
            <nav>
                <h1 >Fecha y Hora: {time}</h1>
                <h1 >Codigo Único CUS: {cus}</h1>
            </nav>
        </Header>
    )
}