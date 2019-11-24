import React, { Fragment } from 'react';
import axiosFetch from '../../config/axiosConfig';


function EditarPropiedad() {


    const ancho={width:'500px'}
    const centro={textAlign:'center'}



    return (
        <Fragment>
           

            <div className="mx-auto" style={ancho}>
          <div className="container center-block ">
            <div className="row">
                <div className="col">
                <form  className="mt-3" >
                    <h2 style={centro}>Edita Tu Propiedad</h2>
                    <p style={centro}>Rellena todos los campos </p>
                    <hr />
                    <div className="row">
                            <div className="col">
                                

                                    <label for="banios">Tipo</label>
                                    <select name="tipoPropiedadId" id="titulo" className="custom-select mb-3" >
                                    
                                        
                                    </select>
                                
                            </div>
                            </div>
                        
                        


                    <div className="form-group">
                            <label for="precio">Precio</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Indicanos el valor de alquiler del inmueble"
                            name="precio"
                            id="precio"
                            
                            />
                        </div>
                    <div className="form-group">
                    <label for="sector">Sector</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="¿En qué sector esta ubicado?"
                        name="sector"
                        id="sector"
                        
                    />
                    </div>
                    <div className="form-group">
                    <label for="direccion">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección"
                        name="direccion"
                        id="direccion"
                        
                    />
                    </div>
                    <div className="form-group">
                            <label for="area">Área</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Indicanos el área en metros cuadrados"
                            name="area"
                            id="area"
                            
                            />
                        </div>

                        <div className="row">
                            <div className="col">
                                    <label for="banios">Baños</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="número de baños"
                                        name="banios"
                                        id="banios"
                                       >
                                    
                                    </input>
                            </div>
                        </div>
                    <div className="form-group">
                    <label for="img_principal">Imagen principal</label>
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Sube la imagen principal"
                        name="img1"
                        id="img_principal"
                        
                    />
                    <div className="form-group">
                            <label for="img_sec">Imagen dos</label>
                            <input
                            type="file"
                            className="form-control"
                            placeholder="Sube otra imagen"
                            name="img2"
                            id="img_sec"
                          
                            />
                        </div>
                        <div className="row">
                                <div className="col">
                                    <label for="habitaciones">Habitaciones</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="habitaciones"
                                        name="habitaciones"
                                        id="habitaciones"
                                       >
                                    
                                    </input>
                            
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="descripcion">Descripción</label>
                                <textarea name="descripcion" id="descripcion" className="form-control"></textarea>
                            </div>


                    
                    <div style={centro} className="custom-control">
                        <label className="form-check-label" ></label>
                        <input  type="checkbox" name="terminos" id="terminos" className="form-check-input mr-2"  />Acepto Terminos y Condiciones
                    
                    </div>
                  <div style={centro}>  <button  type="submit" className="btn btn-primary" >Enviar</button> </div>
                    
                
        </div>
        </form>

      </div>
    </div>
    </div>
    </div>
    

            
        </Fragment>
    )
}

export default EditarPropiedad;