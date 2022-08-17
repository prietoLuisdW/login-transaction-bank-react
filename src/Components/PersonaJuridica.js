import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AvisoErrorForms, BloqueInput, BtnCancel, BtnSend, Formulario, Input, Select } from "../Elements/Forms";
import { valUser } from "../Functions/valUser";

export function PersonaJuridica (){

    const defaultPJ = 'Nit'

    const [tipoDocumento, setTipoDocumento] = useState(defaultPJ)
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('')
    const [grupoEmpresarial, setGrupoEmpresarial] = useState('')
    const [token, setToken] = useState('')
    const [password, setPassword]=useState('')
    const [avisoFormulario, setAvisoFormulario] = useState('false')
    
    const navigate = useNavigate()

    function cambiarDocumento (e) {
        setTipoDocumento(e.target.value)
        setAvisoFormulario('false')
    }

    function cambiarNumeroIdentificacion (e){
        setNumeroIdentificacion(e.target.value)
        setAvisoFormulario('false')
    }

    function cambiarGrupoEmpresarial(e){
        setGrupoEmpresarial(e.target.value)
        setAvisoFormulario('false')
    }

    function cambiarToken (e){
        setToken(e.target.value)
        setAvisoFormulario('false')
    }

    function cambiarContraseña (e){
        setPassword(e.target.value)
        setAvisoFormulario('false')
    }

    function onSubmit (e){
        e.preventDefault()
        if(
            tipoDocumento !== 'Tipo Documento' &&
            numeroIdentificacion !== '' &&
            password !== '' &&
            grupoEmpresarial !== '' &&
            token !== ''
        ){
            let datosUsuario = {
                tipoDocumento: tipoDocumento,
                numeroIdentificacion: numeroIdentificacion,
                password: password,
                grupoEmpresarial: grupoEmpresarial,
                token: token
            }
            setAvisoFormulario('false')
            console.table(datosUsuario)
            // valUser(datosUsuario, navigate)
            navigate('/step1')
        }else{
            setAvisoFormulario('true')
            console.warn('Error')
            console.log(avisoFormulario)
        }
    }

    return(
        <div className='row justify-content-center rounded-2 p-3'>
            
            <Formulario action="" onSubmit={onSubmit}>
                {avisoFormulario === 'true' ? <AvisoErrorForms>Debe diligenciar todos los campos</AvisoErrorForms> : null }
                <BloqueInput>
                    <label >Tipo Identificación</label>
                    <Select onChange={cambiarDocumento} 
                        error={avisoFormulario}
                        defaultValue={defaultPJ}> 
                        <option>Tipo de Indentificación</option>
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
                        onChange={cambiarNumeroIdentificacion}
                        error={avisoFormulario}
                    />
                </BloqueInput>
                <BloqueInput>
                    <label htmlFor="grupoEmpresarial">Grupo Empresarial</label>
                    <Input 
                        type='text'
                        id='grupoEmpresarial'
                        placeholder="Grupo Empresarial"
                        onChange={cambiarGrupoEmpresarial}
                        error={avisoFormulario}
                    />
                </BloqueInput>
                <BloqueInput>
                    <label htmlFor="token">Token</label>
                    <Input 
                        type='password'
                        id='token'
                        placeholder="Token"
                        onChange={cambiarToken}
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
                <BloqueInput />
                <BtnSend>Ingresar</BtnSend>
                <BtnCancel>Cancelar</BtnCancel>

            </Formulario>
            
        </div>
    )
}