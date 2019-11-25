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
                
                       
            </section>
        </Fragment>

    )
}

export default FiltrosMas;