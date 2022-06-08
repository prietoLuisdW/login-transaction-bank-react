import React from "react"
import { Link } from "react-router-dom"
import IconBus from '../Utilities/buss-white.svg'
import IconPerson from '../Utilities/person-white.svg'

export function Landing () {
    return (
        
        <div className="container">
            <div className="d-flex flex-column mt-4 ">
                <h1 className="text-center fs-5 fc_grey fw-bolder">Bienvenid@ al Nuestro Portal de Pagos</h1>
                <h1 className="text-center fs-6 fc_grey">Selecciona el Tipo de Persona</h1>
            </div>
            
            <div className="d-flex justify-content-center mt-2">
                <div type="button" as={Link} to="/empresas" className="bg_icon border rounded-2 mx-5">
                    <img className="icon1 " src={IconBus}/>
                    <h1 className="fs-6 fc_white">Empresas</h1>
                </div>
                <div type="button" as={Link} to="/personas" className="bg_icon border rounded-2 mx-5">
                    <img className="icon1" src={IconPerson}/>
                    <h1 className="fs-6 fc_white">Personas</h1>
                </div>
            </div>

            <div className="d-flex flex-column mt-4 ">
                <h1 className="text-center fs-6 fc_grey fw-light">Solicitar mi Clave Internet</h1>
            </div>
            
        </div>
    )
}