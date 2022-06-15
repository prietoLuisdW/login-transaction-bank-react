import React from "react";
import { ContenedorFooter, ImgFooter } from "../Elements/Nav";
import LogoSFC from '../Utilities/logoSuperfinanciera.png'

export function Footer(){
    
    return (
        <ContenedorFooter >
            <ImgFooter src={LogoSFC} />
            <div >Banco Falabella S.A. | Todos los Derechos Reservados</div>
        </ContenedorFooter>
    )
}