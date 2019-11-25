import React, { Fragment, useState, useEffect } from 'react';
import axiosFetch from '../../config/axiosConfig';
import { Link } from 'react-router-dom';
import './nav.css';


const Nav = props => {

    
    const isLoggedIn = props.isLoggedIn;

    const [tipoPropiedades, guardarTipoPropiedades] = useState([]);

    const fetchAPI = async () => {
      const tiposPropiedadesData = await axiosFetch.get("/tipo-propiedades");
  
      setTimeout(() => {
        guardarTipoPropiedades(tiposPropiedadesData.data);
      }, 300);
    };
  
    useEffect(() => {
      fetchAPI();
    }, []);

    const [filBusqueda, guardarFilBusqueda] = useState({
        titulo: '',
        areamt: '',
        tipo_propiedad: '',
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

    const renderLoginSignup = () => {
        if (isLoggedIn !== true) {
            return(
               <Fragment>
                    <li className="nav-item" id="login_nav_item">
                <Link className="nav-link " to={"/login"}>
                       Login 
                </Link>
            </li>

            <li className="nav-item" id="login_nav_item">
            <Link className="nav-link " to={"/registrar"}>
                Registrar
            </Link>
            </li>
               </Fragment>
            )
        } else {
            return null;
        }
    }

        return (
            <Fragment>

                <div className="text-center">
                    <div className=" cover-container d-flex w-100 h-100 p-3 mx-auto flex-column navegar">

                        <main role="main">


                            <section className="text-center">
                                <nav className="navbar navbar-expand-sm ml-5">

                                <a className="navbar-brand" href="#">
                                    
                                        Social-Cowork
                                        
                                    </a>
                                  


                                    <button className="navbar-toggler collapsed navbar-dark " 
                                        type="button" data-toggle="collapse" data-target="#navbarsExample01"
                                        aria-controls="navbarsExample01" aria-expanded="false"
                                        aria-label="Navegación de palanca">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="navbar-collapse collapse mt-2" id="navbarsExample01" >
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to={"/"}>
                                                
                                                    Inicio 
                                                    <span className="sr-only">
                                                    
                                                        (actual)
                                                        
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/PropiedadesFiltro"}>
                                                    Explorar
                                                </Link>
                                            </li>

                                            {renderLoginSignup()}

                                            <li className="nav-item dropdown">
                                                <Link className="nav-link " to={"/Pago"} id="dropdown01" aria-haspopup="true"
                                                    aria-expanded="false">
                                                      Pago
                                                </Link>

                                            </li>
                                        </ul>
                                        
                                        <form className="form-inline  my-md-0 " onSubmit={mostrarDataFiltrada}>

                                            <select

                                                name="tipo_propiedad"
                                                required
                                                id="tipo_propiedad"
                                                className="custom-select mb-3 form-control"
                                                onChange={recibirCambioInput}
                                            >
                                                <option defaultValue="">Tipo</option>
                                                {tipoPropiedades.map(tipoPropiedad => (
                                                    <option value={parseInt(tipoPropiedad.id)} key={tipoPropiedad.id}>
                                                    {tipoPropiedad.nombre}
                                                    </option>
                                                ))}
                                                </select>

                                                <input 
                                                className="form-control form-control-sm"
                                                 name="areamt" type="number" placeholder="area"
                                                 onChange={recibirCambioInput}
                                                 />
                                 
                                            <input 
                                                className="form-control form-control-sm"
                                                name="titulo" type="text" placeholder="Buscar"
                                                 aria-label="Buscar"
                                                 onChange={recibirCambioInput}
                                                 />

                                             <button type="submit" className="ml-2 searchform_button search_button btn btn-primary btn-sm">Buscar</button>

                                        </form>
                                    </div>
                                </nav>

                            </section>
                        </main>

                    </div>
                </div>

            </Fragment>

        );
}

export default Nav;