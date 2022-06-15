import './style.css'
import React, {useState} from 'react';
import { Footer } from './Components/Footer';
import { Header, ImgBrand } from './Elements/Nav'
import LogoBF from './Utilities/logoBancoFalabella.png'
import { PersonaJuridica } from './Components/PersonaJuridica';
import { PersonaNatural } from './Components/PersonaNatural';
import { Contenedor, ContenedorTipo, IconEmpresa, IconPersona } from './Elements/Land';
import iconPerson from './Utilities/person-white.svg'
import iconEmpresa from './Utilities/buss-white.svg'

export default function App() {

    const [time]=useState('Martes 14 Junio 2022 17:30')
    const [cus]=useState('1234567')
    const [tipoPersona, setTipoPersona]=useState('personas')

    function cambiarTipoEmpresas(){
        setTipoPersona('empresas')
    }
    function cambiarTipoPersonas(){
        setTipoPersona('personas')
    }

    return (
        <main>
            <Header>
                <ImgBrand src={LogoBF}/>
                <nav>
                    <h1 >Fecha y Hora: {time}</h1>
                    <h1 >Codigo Único CUS: {cus}</h1>
                </nav>
            </Header>
            <Contenedor>
                <h1>Buenevenido a nuestro portal de pagos</h1>
                <ContenedorTipo>
                    <IconPersona 
                        onClick={cambiarTipoPersonas}
                        tipo={tipoPersona}
                    
                    >
                        <img src={iconPerson} />
                        <p>Personas</p>
                    </IconPersona>
                    <IconEmpresa 
                        onClick={cambiarTipoEmpresas}
                        tipo={tipoPersona}
                    >
                        <img src={iconEmpresa} />
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
