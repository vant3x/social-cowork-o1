import React, { Fragment, useState, useEffect } from "react";

import axiosFetch from "../../config/axiosConfig";
import { withRouter } from "react-router-dom";

const ReservaResumen = (props) => {

    const [reserva, guardarReserva] = useState([]);
    const [propiedadInfo, guardarPropiedad] = useState([]);

    const apiFetch = async () => {
      const reservaData = await axiosFetch.get(`/historial-reserva/${props.match.params.idReserva}`);
      guardarReserva(reservaData.data);
    
      console.log(reservaData.data);

      const propiedad = await axiosFetch.get(
        `/propiedades/${reservaData.data.PropiedadeIdPropiedades}`
      );
      guardarPropiedad(propiedad.data);

      setTimeout(() => {
        console.log(reserva);
      },1000)


    };


  
    useEffect(() => {
      apiFetch();
    }, []);

  

  

    return(
        <Fragment>
          <div className="container justify-center text-center">
           <div className="row">
                <div className="card p-4">
                      <h2 className="card-title">Resumen Reserva: #{reserva.id}</h2>
                <div className="col-md-12">
                    <div className="card-body">
                            <div className="col-md-12">
                        <h3> <span className="text-primary"> Fecha Reserva:</span> {reserva.fecha_reserva || null}</h3>
                        </div>

                        <div className="col-md-12">
                        <h3><span className="text-primary"> Propiedad: </span> {propiedadInfo.titulo} </h3>

                        </div>

                        <div className="col-md-12">
                          <h3><span className="text-primary"> Fecha Inicial Reserva: </span> {reserva.fecha_in} </h3>
                          <h3><span className="text-primary"> Fecha Final Reserva: </span> {reserva.fecha_out} </h3>

                        </div>

                        <div className="col-md-12">
                        <h3><span className="text-primary"> Valor de Reserva: </span> ${reserva.valor}.000 </h3>

                        </div>
                    </div>
                    </div>  
                </div>
           </div>
          </div>
        </Fragment>
    )
}

export default ReservaResumen;