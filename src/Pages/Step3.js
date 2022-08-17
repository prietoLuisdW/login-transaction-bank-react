import NavSteps from "../Components/NavSteps";
import Resumen from "../Components/Resumen";
import { Contenedor } from "../Elements/Steps";


export default function Step3(){

    return(
        <Contenedor>
            <NavSteps activeBotton={'third'}/>
            <Resumen />
        </Contenedor>

    )

}