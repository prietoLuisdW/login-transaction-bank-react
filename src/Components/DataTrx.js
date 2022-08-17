import { useState } from "react";
import Numeral from "react-numeral";
import { useNavigate } from "react-router-dom";
import { Aviso, Bloque, Botonera, Botton, Concepto, Container, Detalle } from "../Elements/Steps";

import { Datos } from "../Elements/Datos";

export function DataTrx(){

    const [concepto] = useState(Datos.concepto)
    const [cuenta] = useState(Datos.cuenta)
    const [disponible] = useState(Datos.disponible)
    const [valor] = useState(Datos.valor)
    const [costo] = useState(Datos.costo) 
    
    // const [error, setError] = useState('false')

    const navigate = useNavigate()

    function handleGoToStep2(){
        if(valor<=disponible){
            navigate('/step2')
        }
        
    }

    function handleGoToBack(){
        navigate('/login')
    }
    
    return(
        <Container>
            <Bloque>
                <h2>Detalle Transaccion</h2>
                <Concepto>Concepto Pago:</Concepto>
                <Detalle>{concepto}</Detalle>
            </Bloque>
            <Bloque>
                <h2>Detalle de Pago</h2>
                <Concepto>Selecciona la Cuenta:</Concepto>
                <Detalle>{cuenta}</Detalle>

                <Concepto>Disponible:</Concepto>
                <Detalle>
                {(disponible > 0) ? <Numeral value={disponible} format={"$ 0,0.00"}/> : `$ ${disponible}`}
                </Detalle>

                <Concepto>valor:</Concepto>
                <Detalle>
                {(valor > 0) ? <Numeral value={valor} format={"$ 0,0.00"}/> : `$ ${valor}`}
                </Detalle>

                <Concepto>Costo:</Concepto>
                <Detalle>
                    {(costo > 0) ? <Numeral value={costo} format={"$ 0,0.00"}/> : `$ ${costo}`}
                </Detalle>
            </Bloque>

            {(valor>disponible) ? <Aviso>Fondos insuficientes</Aviso> : <div />}

            <Botonera>
                <Botton name='cancel' onClick={handleGoToBack}>Regresar</Botton>
                <Botton name='send' onClick={handleGoToStep2}>Continuar</Botton>
            </Botonera>

        </Container>
    )

    
}

