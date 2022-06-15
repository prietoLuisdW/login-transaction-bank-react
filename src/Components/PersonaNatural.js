import React from "react";
import { BloqueInput, BtnCancel, BtnSend, Formulario } from "../Elements/Forms";

export function PersonaNatural (){
    return(
        <div className='row justify-content-center rounded-2 p-3'>
            
                <Formulario >
                <BloqueInput>
                        <label >Tipo Identificación</label>
                        <select> 
                            <option selected >Tipo de Indentificación</option>
                            <option>Cedula de Ciudadania</option>
                            <option>Nit</option>
                            <option>Cedula de Extrajeria</option>
                            <option>tarjeta de Indentidad</option>
                            <option>Pasaporte</option>
                            <option>Carnet Diplomático</option>
                        </select>
                    </BloqueInput>
                    <BloqueInput>
                        <label htmlFor="identificacion">Numero de Identificación</label>
                        <input 
                            type='text'
                            id='identificacion'
                            placeholder="Número de Identificación"
                        />
                    </BloqueInput>
                    <BloqueInput>
                        <label htmlFor="contraseña">Clave de Internet</label>
                        <input 
                            type='password'
                            id='contraseña'
                            placeholder="Contraseña"
                        />
                    </BloqueInput>
                    <BtnSend>Ingresar</BtnSend>
                    <BtnCancel>Cancelar</BtnCancel>

                </Formulario>
            
        </div>
    )
}