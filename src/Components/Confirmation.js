import { Bloque, Botonera, Botton, Concepto, Container, Detalle, InputToken, TextToken, TokenGrup } from "../Elements/Steps";

import { Datos } from "../Elements/Datos";
import Numeral from "react-numeral";
import { useNavigate } from "react-router-dom";
import { AvisoErrorForms } from "../Elements/Forms";
import { useState } from "react";
import SoftToken from '../Elements/softoken.jpg'


export function Confirmation(){

    const navigate = useNavigate()
    const tokenBD = Datos.tokenBD

    const [errorToken, setErrorToken] = useState('false')
    const [token, setToken] = useState()

    function handleSetToken (e){
        setToken(e.target.value)
        console.log(tokenBD)
        setErrorToken('false')

    }
    console.log(token)

    function handleGoToStep1(){
        navigate('/step1')
    }

    function handleGoToStep3(){
        if (token == tokenBD){
            navigate('/step3')
            console.log(errorToken)
        }else{
            setErrorToken('true')
            console.warn(errorToken)
        }
        
    }

    return(
        <Container>
            <Bloque>
                <h2>Detalle Transaccion</h2>
                <Concepto>Concepto de Pago:</Concepto>
                <Detalle>{Datos.concepto}</Detalle>
            </Bloque>
            <Bloque>
            <h2>Detalle de Pago</h2>
                <Concepto>Selecciona la Cuenta:</Concepto>
                <Detalle>{Datos.cuenta}</Detalle>

                <Concepto>Disponible:</Concepto>
                <Detalle>
                {(Datos.disponible > 0) ? <Numeral value={Datos.disponible} format={"$ 0,0.00"}/> : `$ ${Datos.disponible}`}
                </Detalle>

                <Concepto>valor:</Concepto>
                <Detalle>
                {(Datos.valor > 0) ? <Numeral value={Datos.valor} format={"$ 0,0.00"}/> : `$ ${Datos.valor}`}
                </Detalle>

                <Concepto>Costo:</Concepto>
                <Detalle>
                    {(Datos.costo > 0) ? <Numeral value={Datos.costo} format={"$ 0,0.00"}/> : `$ ${Datos.costo}`}
                </Detalle>
            </Bloque>
            <TokenGrup>
                <TextToken>
                    <h2>Ingreso de clave de seguridad</h2>
                    <h1>Recibira un SMS o llamada con la clave de seguridad a tu celular 3*******67. Ingresela dentro de los proximos 5 minutos.</h1>
                </TextToken>   
                <InputToken 
                    type='text'
                    id='token'
                    error={errorToken}
                    onChange={handleSetToken}
                />
                <nav>
                    <img src={SoftToken}/>
                </nav>
                {errorToken === 'true' && <AvisoErrorForms>Código no coincide!</AvisoErrorForms>}
            </TokenGrup>
            <Botonera>
                <Botton name='cancel' onClick={handleGoToStep1}>Regresar</Botton>
                <Botton name='send' onClick={handleGoToStep3}>Continuar</Botton>
            </Botonera>
        </Container>
    )
}