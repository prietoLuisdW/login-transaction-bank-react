import { Confirmation } from "../Components/Confirmation";
import NavSteps from "../Components/NavSteps";
import { Contenedor } from "../Elements/Steps";



export default function Step2(){

    return(
        <Contenedor>
            <NavSteps activeBotton={'second'}/>
            <Confirmation />
        </Contenedor>
    )

}