import Numeral from "react-numeral";
import { Datos } from "../Elements/Datos";
import { Bloque, Botonera, Botton, Concepto, Container, Detalle } from "../Elements/Steps";


export default function Resumen (){



    return(
        <Container>
            <Bloque>

                <h2>Detalle Transaccion</h2>
                <Concepto>Concepto de Pago:</Concepto>
                <Detalle>{Datos.concepto}</Detalle>

                <h2>Detalle de Pago</h2>
                <Concepto>Debito a la Cuenta:</Concepto>
                <Detalle>{Datos.cuenta}</Detalle>

                <Concepto>valor Compra:</Concepto>
                <Detalle>
                {(Datos.valor > 0) ? <Numeral value={Datos.valor} format={"$ 0,0.00"}/> : `$ ${Datos.valor}`}
                </Detalle>

                <Concepto>Costo Transacción:</Concepto>
                <Detalle>
                    {(Datos.costo > 0) ? <Numeral value={Datos.costo} format={"$ 0,0.00"}/> : `$ ${Datos.costo}`}
                </Detalle>
            </Bloque>

            <Bloque>
            <h2>Confirmacion de Pago</h2>
                <Concepto>Estado</Concepto>
                <Detalle>{Datos.estadoTransaccion}</Detalle>

                <Concepto>Fecha Transaccion:</Concepto>
                <Detalle>{Datos.fechaTransaccion}</Detalle>

                <Concepto>IP Transaccion:</Concepto>
                <Detalle>{Datos.ipTransaccion}</Detalle>
            </Bloque>  


            <Botonera>
                <Botton name='cancel' onClick>Imprimir</Botton>
                <Botton name='cancel' onClick>Descargar</Botton>
                <Botton name='send' onClick>Finalizar</Botton>
            </Botonera> 


        </Container>
    )
}