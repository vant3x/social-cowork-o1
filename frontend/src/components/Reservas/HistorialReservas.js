import React, { useState, useEffect, Fragment } from "react";
import axiosFetch from "../../config/axiosConfig";

import { Link } from 'react-router-dom';

const HistorialReserva = props => {
  const [reservas, guardarReservas] = useState([]);

  const apiFetch = async () => {
    const reservasData = await axiosFetch.get("/historial-reserva");
    guardarReservas(reservasData.data);
    console.log(reservas);
    console.log(reservasData.data);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h2>Historial de Reserva </h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Valor</th>
                <th scope="col">Fecha Reserva</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
                {
                    reservas.map(reserva => (
                    <tr key={reserva.id}>
                        <th scope="row"> {reserva.id} </th>
                    <td>${reserva.valor.toFixed(3)}</td>
                        <td>{ new Date(reserva.fecha_reserva) .toISOString().slice(0,10)}</td>
                        <td><Link to={`/reserva/${reserva.id}`} className="btn btn-primary">Más información</Link></td>
                      </tr>
                    ))
                }

           

            
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default HistorialReserva;
