import React from "react";

export function PersonaNatural (){
    return(
        <div className='row justify-content-center rounded-2 p-3'>
            
                <form className="col-lg-8 col-md-10 col-sm-12 border p-3 rounded bg_forms">
                    <fieldset className="row">
                        <div className="row">
                            <div className="col p-0 pb-1">
                                <select id="tipoIdentificacion" className='form-select'>
                                    <option selected>Tipo de Indentificación</option>
                                    <option>Cedula de Ciudadania</option>
                                    <option>Nit</option>
                                    <option>Cedula de Extrajeria</option>
                                    <option>tarjeta de Indentidad</option>
                                    <option>Pasaporte</option>
                                    <option>Carnet Diplomático</option>
                                </select>
                            </div>
                            <div className="col p-0">
                                <input tipe="number" id="tipoIdentificacion" className='form-control' placeholder='Número de Identificación'></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col p-0">
                                <input type="pasword" id="pasword" className='form-control w-50' placeholder='Ingrese su Clave Internet'></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col p-2 ">
                                <button type="button" class="btn btn-success mb-2 w-100 ">Ingresar</button>
                            </div>
                            <div className="col p-2">
                                <button type="button" class="btn btn-light border w-100 ">Cancelar</button>
                            </div>
                        </div>
   
                    </fieldset>

                </form>
            
        </div>
    )
}