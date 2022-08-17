import { BtnStep, GrupoBtn, NumStep, Title } from "../Elements/NavSteps"
import { Head } from "../Elements/Steps"
import { CancelTrx } from "./CancelTrx"


export default function NavSteps({activeBotton}){
    return(
        <div>
            <Head>
                <h2>Pagos PSE | Pagos en Linea</h2>
                <CancelTrx />
            </Head>
            <GrupoBtn>
                <BtnStep valueStep={activeBotton} step='first'>
                    <NumStep valueStep={activeBotton} step='first' >1</NumStep>
                    <h1>Definicion de Pago</h1>
                </BtnStep>
                <BtnStep valueStep={activeBotton} step='second'>
                    <NumStep valueStep={activeBotton} step='second' >2</NumStep>
                    <h1>Confirmación</h1>
                </BtnStep>
                <BtnStep valueStep={activeBotton} step='third'>
                    <NumStep valueStep={activeBotton} step='third' >3</NumStep>
                    <h1>Comprobante</h1>
                </BtnStep>
            </GrupoBtn>
        </div>
    )
}