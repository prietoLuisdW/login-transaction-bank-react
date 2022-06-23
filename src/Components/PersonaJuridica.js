import React from "react";
import { BloqueInput, BtnCancel, BtnSend, Formulario, Input, Select } from "../Elements/Forms";

export function PersonaJuridica (){

    function onSubmit (e){
        e.preventDefault()
    }

    return(
        <div className='row justify-content-center rounded-2 p-3'>
            
            <Formulario action="" onSubmit={onSubmit}>
                <BloqueInput>
                    <label >Tipo Identificación</label>
                    <Select> 
                        <option value >Tipo de Indentificación</option>
                        <option>Cedula de Ciudadania</option>
                        <option>Nit</option>
                        <option>Cedula de Extrajeria</option>
                        <option>tarjeta de Indentidad</option>
                        <option>Pasaporte</option>
                        <option>Carnet Diplomático</option>
                    </Select>
                </BloqueInput>
                <BloqueInput>
                    <label htmlFor="identificacion">Numero de Identificación</label>
                    <Input 
                        type='text'
                        id='identificacion'
                        placeholder="Número de Identificación"
                    />
                </BloqueInput>
                <BloqueInput>
                    <label htmlFor="grupoEmpresarial">Numero de Identificación</label>
                    <Input 
                        type='text'
                        id='grupoEmpresarial'
                        placeholder="Grupo Empresarial"
                    />
                </BloqueInput>
                <BloqueInput>
                    <label htmlFor="token">Token</label>
                    <Input 
                        type='password'
                        id='token'
                        placeholder="Token"
                    />
                </BloqueInput>
                <BloqueInput>
                    <label htmlFor="contraseña">Clave de Internet</label>
                    <Input 
                        type='password'
                        id='contraseña'
                        placeholder="Contraseña"
                    />
                </BloqueInput>
                <BloqueInput />
                <BtnSend>Ingresar</BtnSend>
                <BtnCancel>Cancelar</BtnCancel>

            </Formulario>
            
        </div>
    )
}