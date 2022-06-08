import React from "react";
import LogoBF from '../Utilities/logoBancoFalabella.png'

export function NavBar (){
    

    return(
        <div className="d-flex justify-content-between bg_gren p-2 ">
            <img className="logo1" src={LogoBF}/>
            <nav className="my-2 h-100 me-4">
                <h1 className="fs_nav text-end my-0">Fecha y Hora: MArtes 07 Junio, 09:00</h1>
                <h1 className="fs_nav text-end my-0">Codigo Único CUS: 1069852768</h1>
            </nav>
        </div>
    )
}