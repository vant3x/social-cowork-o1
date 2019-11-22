import React, { Fragment, useState, useEffect, createContext, useContext } from 'react';
import './form.css';
import axiosFetch from '../../config/axiosConfig';

function FiltroB() {

    const [filBusqueda, guardarFilBusqueda] = useState({
        titulo: '',
        area: '',
        tipoPropiedadId: '',
        precio1: '',
        precio2: ''
    });


    const recibirCambioInput = async (e) => {
        console.log(e.target.value);
        guardarFilBusqueda(
            {
                ...filBusqueda,
                [e.target.name] : e.target.value
            }
        );
        console.log(filBusqueda)
        console.log(filBusqueda.titulo)
    }

    const mostrarDataFiltrada = async (e) => {
        e.preventDefault();
       const data = await axiosFetch.post('/propiedades/filter', filBusqueda)
            .then(res => {
                console.log(res.data)
                return res.data
            }).catch(err => console.log(err))

            console.log(data)
    }

    return (

        <Fragment>

            <div className="text- py-3 px-4">
                <div>
                    <div className="container">
                        <div className="row">
                            
                    
                            <form onSubmit={mostrarDataFiltrada}>
                               

                                <div className="search_button-container">
                                <div className="col-2">
                                    <div className="input-group date fm" data-provide="datepicker">

                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )


}

export default FiltroB;