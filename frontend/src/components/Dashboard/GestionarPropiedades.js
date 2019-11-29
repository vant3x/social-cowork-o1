import React, { Fragment, useEffect, useState } from 'react';
import axiosFetch from './../../config/axiosConfig';
import Dashboard from './DashboardOP';
import CardPropiedad from './CardPropiedad';


const GestionarPropiedades = (props) => {

    const [propiedades, guardarPropiedades] = useState([]);

    const fetchApi = async () => {
        const propiedades = await axiosFetch.get('/propiedades');
        guardarPropiedades(propiedades.data);
        console.log(propiedades);
    }

    useEffect(() => {
        fetchApi();
    }, [propiedades]);


    return(
        <Dashboard>
            <h2>Gestionar las Propiedades Existentes</h2>
            <div className="text-center">
        <div className=" cover-container d-flex w-100 p-3 mx-auto flex-column navegar">
            <div className="album py-3 ">
              <div className="container">
                <div className="row">
                {propiedades.map(propiedad => (
                    <CardPropiedad
                      key={propiedad.id_propiedades}
                      propiedad={propiedad}
                    />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
        </Dashboard>
    );

}

export default GestionarPropiedades;