import React, { Fragment } from "react";
import "./form.css";

function editarPropiedad() {
  return (
    <Fragment>
      <div className="mx-auto" style={ancho}>
        <div className="container center-block ">
          <div className="row">
            <div className="col">
              <form className="mt-3" onSubmit={actualizarPropiedadApi}>
                <h2>Edita tu inmueble</h2>
                <legend>Todos los campos son requeridos*</legend>
                <hr />
                <div className="form-group">
                  <label for="precio">Título</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Nombra el inmueble"
                    name="titulo"
                    id="titulo"
                    defaultValue={titulo}
                    onChange={infoProducto}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label for="banios">Tipo</label>
                    <select
                      name="tipoPropiedadId"
                      required
                      id="titulo"
                      className="custom-select mb-3"
                      defaultValue={tipo}
                      onChange={actualizarState}
                    >
                      {tipoPropiedades.map(tipoPropiedad => (
                        <option value={tipoPropiedad.id} key={tipoPropiedad.id}>
                          {" "}
                          {tipoPropiedad.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label for="precio">Precio</label>
                  <input
                    type="text"
                    required
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
                    required
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
                    required
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
                      required
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
                  <label for="img_principal">Imagen principal</label>
                  <input
                    type="file"
                    required
                    className="form-control"
                    placeholder="Sube la imagen principal"
                    name="img1"
                    id="img_principal"
                    onChange={leerArchivo}
                  />
                  <div className="form-group">
                    <label for="img_sec">Imagen dos</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Sube otra imagen"
                      name="img2"
                      id="img_sec"
                      onChange={leerArchivo}
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="habitaciones">Habitaciones</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="habitaciones"
                        name="habitaciones"
                        id="habitaciones"
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
                    value="Agregar propiedad"
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

export default editarPropiedad;
