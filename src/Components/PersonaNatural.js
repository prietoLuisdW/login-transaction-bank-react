import React, { useState } from "react";
import { AvisoErrorForms, BloqueInput, BtnCancel, BtnSend, Formulario, Input, Select } from "../Elements/Forms";

export function PersonaNatural (){
    const [tipoDocumento, setTipoDocumento] = useState('Tipo Documento')
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('')
    const [password, setPassword] = useState('')
    const [avisoFormulario, setAvisoFormulario] = useState('false')

    function cambiarTipoDocumento (e){
        setTipoDocumento(e.target.value)
        console.log(tipoDocumento)
    }
    console.log('A: ' + tipoDocumento)

    function cambiarNumeroIdentificacion(e){
        setNumeroIdentificacion(e.target.value)
        console.log(numeroIdentificacion)
    }
    console.log('D: ' + numeroIdentificacion)

    function cambiarContraseña(e){
        setPassword(e.target.value)
        console.log(password)
    }
    console.log('e: ' + password)

    function onSubmit(e){
        e.preventDefault()
        if( 
            tipoDocumento !== 'Tipo Documento' && 
            numeroIdentificacion !== '' && 
            password !== ''
            ){
            let datosUsuario = 
                {tipoDocumento: tipoDocumento, 
                numeroIdentificacion: numeroIdentificacion,
                password: password,
                 }
            setAvisoFormulario('false')
            console.log(datosUsuario)
            }else{
                setAvisoFormulario('true')
                console.log(avisoFormulario)
            }
    }

    return(
        <div>
            <Formulario action="" onSubmit={onSubmit} >
                    {avisoFormulario === 'true' ? <AvisoErrorForms>Debes diligenciar todos los campos</AvisoErrorForms> :null}
                    <BloqueInput>
                        <label >Tipo Identificación</label>
                        <Select onChange={cambiarTipoDocumento} error={avisoFormulario}> 
                            <option value >Tipo de Indentificación</option>
                            <option>Cedula de Ciudadania</option>
                            <option>Nit</option>
                            <option>Cedula de Extrajeria</option>
                            <option>Tarjeta de Indentidad</option>
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
                            onChange={cambiarNumeroIdentificacion}
                            error={avisoFormulario}
                        />
                    </BloqueInput>
                    <BloqueInput>
                        <label htmlFor="contraseña">Clave de Internet</label>
                        <Input 
                            type='password'
                            id='contraseña'
                            placeholder="Contraseña"
                            onChange={cambiarContraseña}
                            error={avisoFormulario}
                        />
                    </BloqueInput>
                    <BtnSend>Ingresar</BtnSend>
                    <BtnCancel>Cancelar</BtnCancel>

                </Formulario>
            
        </div>
    )
}