import React, { Fragment } from "react";

import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import axiosFetch from './../../config/axiosConfig';


const CardPropiedad = (props) => {

    const eliminarPropiedad = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una propiedad  eliminada no se puede recuperar",
            type:'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d333',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
               axiosFetch.delete(`/eliminar-propiedad/${id}`)
                 .then(res => {
                    Swal.fire(
                        'Eliminado ',
                         res.data.mensaje,
                        'success'
                    );
                 })
            }
        })
    }

  return (
    <Fragment>
      <div className="col-md-4  animated fadeIn">
        <div className="card mb-4 shadow-sm">
          <img
            src={`http://localhost:5000/uploads/${props.propiedad.imagen}`}
            className="img-fluid"
          ></img>

          <div className="card-body text-center">
            <h5 className="card-title">{props.propiedad.titulo}</h5>
            <p className="card-text">{props.propiedad.descripcion} </p>
            <strong>Precio: ${props.propiedad.precio}</strong>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/editar-propiedad/${props.propiedad.id_propiedades}`}>
                  <button
                    type="button"
                    className="btn btn-sm btn-success text-white  mt-2"
                  >
                    Editar
                  </button>
                </Link>
                  <button
                    type="button"
                    onClick={() => eliminarPropiedad(props.propiedad.id_propiedades)}
                    className="btn btn-sm btn-danger text-white ml-2 mt-2"
                  >
                    Eliminar
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardPropiedad;
