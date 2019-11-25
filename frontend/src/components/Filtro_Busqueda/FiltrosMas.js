import React, { Fragment, useState, useEffect } from 'react';
import axiosFetch from '../../config/axiosConfig';
import ListaTipoPropiedad from '../../components/Filtro_Busqueda/ListaTipoPropiedad';

function FiltrosMas() {
     
    const [tipoPropiedades, guardarTipoPropiedades] = useState([]);

    const fetchAPI = async () => {
        const tiposPropiedadesData = await axiosFetch.get('/tipo-propiedades');
        console.log(tiposPropiedadesData)

        guardarTipoPropiedades(tiposPropiedadesData.data);
     
    }

    useEffect(() => {
        fetchAPI();
    }, []);
    return (
        <Fragment>

            <section className="application_filterBar">
                <div className="FilterBar" data-wdio="FilterBar">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <div className="dropdown">
                                <button className="btn btn-outline-dark dropdown-toggle btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Precio
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item  btn-sm" type="button">Action</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-2"><div className="dropdown">
                            <button className="btn btn-outline-dark dropdown-toggle  btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tipo
                                 </button>
                                 <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                   <select>
                                    {tipoPropiedades.map(tiPropiedad => (

                                                <ListaTipoPropiedad 
                                                    key={tiPropiedad.id}
                                                    tipoPropiedadProp={tiPropiedad}
                                                />
                                        ))}
                                        </select>
                                </div>

                            </div>
                            </div>
                            <div className="col-2"><div className="dropdown">
                                <button className="btn btn-outline-dark dropdown-toggle  btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Area
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item  btn-sm" type="button">Action</button>

                                </div>
                            </div>
                            </div>
                            <div className="col-2 dropdown" ><button type="button" className="control btn btn-filter btn-sm" data-filter="all">Mas filtros</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    )
}

export default FiltrosMas;