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

    const PropiedadesContext = createContext({});

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
                            <div className="col-2 center-clock">
                                <div className="input-group place fm" data-provide="place">
                                    <input type="text" placeholder="Lugar" className="form-control form-control-sm fm" />
                                    <div className="input-group-addon">
                                        <span
                                            className="form-control-icon search-destination-input_icon"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group date fm" data-provide="datepicker">
                                    <input type="text" placeholder="Entrada" className="form-control form-control-sm  fm" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group date fm" data-provide="datepicker">
                                    <input type="text" placeholder="Salida" className="form-control form-control-sm  fm" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={mostrarDataFiltrada}>
                                <div className="col-2">
                                    <div className="input-group date fm" data-provide="datepicker">
                                        <input type="text" placeholder="Buscar" 
                                            onChange={recibirCambioInput}
                                            name="titulo" className="form-control form-control-sm  fm" />
                                    
                                    </div>
                                </div>

                                <div className="search_button-container">
                                <div className="col-2">
                                    <div className="input-group date fm" data-provide="datepicker">
                                    <button type="submit" className="searchform_button search_button btn btn-primary btn-sm">Buscar</button>

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