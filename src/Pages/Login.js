import '../style.css'
import React, {useState} from 'react';
import { Footer } from '../Components/Footer';
import { PersonaJuridica } from '../Components/PersonaJuridica';
import { PersonaNatural } from '../Components/PersonaNatural';
import { Contenedor, ContenedorTipo, IconEmpresa, IconPersona } from '../Elements/Land';
import iconPerson from '../Utilities/person-white.svg'
import iconEmpresa from '../Utilities/buss-white.svg'

export default function Login() {

    
    const [tipoPersona, setTipoPersona]=useState('personas')

    function cambiarTipoEmpresas(){
        setTipoPersona('empresas')
    }
    function cambiarTipoPersonas(){
        setTipoPersona('personas')
    }

    return (
        <main>
            <Contenedor>
                <h1>Buenevenido a nuestro portal de pagos</h1>
                <ContenedorTipo>
                    <IconPersona 
                        onClick={cambiarTipoPersonas}
                        tipo={tipoPersona}
                    
                    >
                        <img src={iconPerson} alt="" />
                        <p>Personas</p>
                    </IconPersona>
                    <IconEmpresa 
                        onClick={cambiarTipoEmpresas}
                        tipo={tipoPersona}
                    >
                        <img src={iconEmpresa} alt=""/>
                        <p>Empresas</p>
                    </IconEmpresa>
                </ContenedorTipo>
            </Contenedor>

            {tipoPersona === 'personas' ? <PersonaNatural /> : <PersonaJuridica/>}
            

            
            
            
                


            
            {/* <Landing />
            <PersonaJuridica />
            <PersonaNatural />  */}
            <Footer />


        </main>   
        
    );
}
