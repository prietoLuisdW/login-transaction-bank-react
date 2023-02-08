import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AvisoErrorForms, BloqueInput, BtnCancel, BtnSend, Formulario, Input, Select } from "../Elements/Forms";
import { valUser } from "../Functions/valUser";

import { clientes } from "../Elements/Datos";

export function PersonaNatural (){

    const defaultPN = 'Cedula de Ciudadania'

    const [tipoDocumento, setTipoDocumento] = useState(defaultPN)
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('')
    const [password, setPassword] = useState('')
    const [avisoFormulario, setAvisoFormulario] = useState('false')
    const [textError, SetTextError] = useState('')
    
    const navigate = useNavigate()

    function cambiarTipoDocumento (e){
        setTipoDocumento(e.target.value)
        setAvisoFormulario('false')
    }
    
    function cambiarNumeroIdentificacion(e){
        setNumeroIdentificacion(e.target.value)
        setAvisoFormulario('false')
    }

    function cambiarContraseña(e){
        setPassword(e.target.value)
        setAvisoFormulario('false')
    }

    function onSubmit(e){
        e.preventDefault()
        if( 
            tipoDocumento !== 'Tipo Documento' && 
            numeroIdentificacion !== '' && 
            password !== ''
            ){
            
            let userFound = clientes.filter(user => user.id === numeroIdentificacion)
            let userFoundSucces = clientes.filter(user => user.password === password && user.tipoId === tipoDocumento && user.id === numeroIdentificacion)
            console.log('User: ' + userFound.length)
            console.log('userSucces:' + userFoundSucces.length)
            if(userFound.length>0){
                
                if(userFoundSucces.length>0){
                    setAvisoFormulario('false')
                    console.table(userFoundSucces)
                    navigate('/step1')
                }else if (userFound.length>0){
                    setAvisoFormulario('true')
                    SetTextError('Datos no coinciden')   
                }
            }else{
                setAvisoFormulario('true')
                SetTextError('Usuario no encontrado')
            }

            // let datosUsuario = 
            //     {tipoDocumento: tipoDocumento, 
            //     numeroIdentificacion: numeroIdentificacion,
            //     claveInternet: password,
            //      }
            
            // valUser(datosUsuario, navigate)
            }else{
                setAvisoFormulario('true')
                SetTextError('Ingrese los datos')
                console.warn('Error')
                console.log(avisoFormulario)
            }
    }

    return(
        <div>
            <Formulario action="" onSubmit={onSubmit} >
                    {avisoFormulario === 'true' ? <AvisoErrorForms>{textError}</AvisoErrorForms> :null}
                    <BloqueInput>
                        <label >Tipo Identificación</label>
                        <Select onChange={cambiarTipoDocumento} 
                            error={avisoFormulario}
                            defaultValue={defaultPN}> 
                            <option>Tipo de Indentificación</option>
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
                            type='number'
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