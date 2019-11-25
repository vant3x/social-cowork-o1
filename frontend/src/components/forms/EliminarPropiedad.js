import React, { Fragment } from "react";

function EliminarPropiedad() {
  return (
    <Fragment>
      <li className="producto animated fadeIn">
        <div className="info-producto">
          <p className="nombre">nombre</p>
          <p className="precio">precio</p>
          {/* <img
              className="img-producto"
              src={`http://localhost:5000/}
              alt=""
            /> */}
          <null></null>
          )}
        </div>
        <div className="acciones">
          {/* <Link
            to={`/productos/editar/${_id}`}
            className="btn btn-azul margin-tb"
          >
            <i className="fas fa-pen"></i> Editar Producto
          </Link> */}
          <button
            className="btn btn-rojo"
            // onClick={() => eliminarProducto(_id)}
          >
            <i className="fas fa-times"></i>
            Eliminar Producto
          </button>
        </div>
      </li>
    </Fragment>
  );
}

export default EliminarPropiedad;
