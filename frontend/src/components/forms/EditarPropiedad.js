<<<<<<< HEAD
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
=======
import React, { Fragment, useState, useEffect } from "react";
import axiosFetch from "../../config/axiosConfig";
import Swal from "sweetalert2";
import "./form.css";

function EditarPropiedad(props) {
  const { id } = props.match.params;

  const [propiedad, guardarPropiedad] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    sector: "",
    direccion: "",
    area: "",
    banios: "",
    imagen: "",
    habitaciones: ""
  });

  const [archivo, guardarArchivo] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const propiedadConsulta = await axiosFetch.get(`/propiedades/${id}`);
      guardarPropiedad(propiedadConsulta.data);
    };

    fetchAPI();
  }, []);

  const actualizarPropiedad = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", propiedad.titulo);
    formData.append("descripcion", propiedad.descripcion);
    formData.append("precio", propiedad.precio);
    formData.append("sector", propiedad.sector);
    formData.append("direccion", propiedad.direccion);
    formData.append("area", propiedad.area);
    formData.append("banios", propiedad.banios);
    formData.append("habitaciones", propiedad.habitaciones);
    formData.append("imagen", archivo);

    // almacenar en la BD
    try {
      const res = await axiosFetch.put(`/admin/propiedades/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.status === 200) {
        Swal.fire("Propiedad Actualizado", res.data.mensaje, "success");
      }

      // redireccionar
      props.history.push("/PropiedadesFiltro");
    } catch (error) {
      console.log(error);
      Swal.fire({
        type: "error",
        title: "Hubo un error",
        text: "Vuelva a intentarlo, la propiedad no se actualizó"
      });
    }
  };

  // leer data form
  const actualizarState = e => {
    guardarPropiedad({
      ...propiedad,
      [e.target.name]: e.target.value
    });
  };
  // colocar la imagen en el state
  const leerArchivo = e => {
    guardarArchivo(e.target.files[0]);
  };

  // extraer los valores del state
  const {
    titulo,
    descripcion,
    precio,
    sector,
    direccion,
    area,
    banios,
    imagen,
    habitaciones
  } = propiedad;

  const ancho = { width: "500px" };
  return (
    <Fragment>
      <div className="mx-auto" style={ancho}>
        <div className="container center-block ">
          <div className="row">
            <div className="col">
              <form className="mt-3" onSubmit={actualizarPropiedad}>
                <h2>Edita tu inmueble</h2>
                <legend>Todos los campos son requeridos*</legend>
                <hr />
                <div className="form-group">
                  <label for="titulo">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombra el inmueble"
                    name="titulo"
                    id="titulo"
                    defaultValue={titulo}
                    onChange={actualizarState}
                  />
                </div>

                <div className="form-group">
                  <label for="precio">Precio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Indicanos el valor de alquiler del inmueble"
                    name="precio"
                    id="precio"
                    defaultValue={precio}
                    onChange={actualizarState}
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
                    defaultValue={sector}
                    onChange={actualizarState}
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
                    defaultValue={direccion}
                    onChange={actualizarState}
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
                    defaultValue={area}
                    onChange={actualizarState}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label for="banios">Baños</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="número de baños"
                      name="banios"
                      id="banios"
                      defaultValue={banios}
                      onChange={actualizarState}
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label> Imagen:</label>
                  {imagen ? (
                    <img
                      width="200"
                      src={`http://localhost:5000/uploads/${props.propiedad.imagen}`}
                      alt="imagen"
                    />
                  ) : null}
                  <input type="file" name="imagen" onChange={leerArchivo} />

                  <div className="row">
                    <div className="col">
                      <label for="habitaciones">Habitaciones</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="habitaciones"
                        name="habitaciones"
                        id="habitaciones"
                        defaultValue={habitaciones}
                        onChange={actualizarState}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="descripcion">Descripción</label>
                    <textarea
                      name="descripcion"
                      id="descripcion"
                      className="form-control"
                      defaultValue={descripcion}
                      onChange={actualizarState}
                    ></textarea>
                  </div>

                  <div className="custom-control">
                    <label className="form-check-label"></label>
                    <input
                      type="checkbox"
                      name="terminos"
                      id="terminos"
                      className="form-check-input mr-2"
                      onChange={actualizarState}
                    />
                    Acepto Terminos y Condiciones
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    value="Actualizar propiedad"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditarPropiedad;
>>>>>>> b9497be3f1fbff2d9224d37689a5b42287a7f768
