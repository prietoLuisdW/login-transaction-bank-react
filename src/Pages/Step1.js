import { DataTrx } from "../Components/DataTrx";
import NavSteps from "../Components/NavSteps";
import { Contenedor } from "../Elements/Steps";

export default function Step1(){

    return(
        <Contenedor>
                <NavSteps activeBotton={'first'} />
                <DataTrx />
        </Contenedor>
    )
}