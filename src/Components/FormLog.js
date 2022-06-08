import React from 'react'
import logoSFC from '../Utilities/logoSuperfinanciera.png'
import logoBF from '../Utilities/logoBancoFalabella.png'

export function FomrLog(){
    return(
        <div className='d-flex m_0 p_0'>
            <div className="logoSuper">
                <img className='w_50' src={logoSFC} alt="Logo"/>
            </div>
            <div className=' principal fixed-top'>
                <div className=' logoBanco'>
                    <img src={logoBF} alt="Logo" />
                </div>
                <div className='container border rounded-2 p-3'>
                    <div className='row cont_form '>
                        <form className=''>
                            <div className='row'>
                                <label className='form-label mb-0 mx-1'>Tipo de Persona</label>
                                <select id="tipoIdentificacion" className='form-select col mb-3 mx-3'>
                                    <option selected>Seleccione una Opción</option>
                                    <option>Persona natural</option>
                                    <option>Persona Jurídica</option>
                                </select>

                                <label className='form-label mb-0 mx-1'>Tipo de Identificación</label>
                                <select id="tipoIdentificacion" className='form-select col mb-3 mx-3'>
                                    <option selected>Tipo de Indentificación</option>
                                    <option>Cedula de Ciudadania</option>
                                    <option>Cedula de Extrajeria</option>
                                    <option>Nit</option>
                                </select>

                                <label className='form-label mb-0 mx-1'>Número de Identificación</label>
                                <input tipe="number" id="tipoIdentificacion" className='form-control col mb-3 mx-3' placeholder='Número de Identificación'></input>

                                <label for="inputPassword" className='form-label mb-0 mx-1'>Clave Internet</label>
                                <input className="col  form-control mb-3 mx-3" type="password" id="inputPassword"  placeholder='*******'></input>

                                <button type="button" class="btn btn-success mb-2  ">Ingresar</button>
                                <button type="button" class="btn btn-light border ">Cancelar</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}