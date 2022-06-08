import React from "react";
import LogoSFC from '../Utilities/logoSuperfinanciera.png'

export function Footer(){
    
    return (
        <div className="d-flex justify-content-around px-2 py-1 _footer">
            <img className="logoSFC my-auto" src={LogoSFC} />
            <div className="fs_nav">Banco Falabella S.A. | Todos los Derechos Reservados</div>
        </div>
    )
}