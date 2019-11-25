import React, { Fragment, createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Pago from "./components/Pago";
import PropiedadesFiltro from "./components/PropiedadesFiltro";
import PropiedadesInfo from "./components/PropiedadesInfo";
import Formpropiedades from "./components/forms/Formpropiedades";
import EditarPropiedad from "./components/forms/EditarPropiedad";
import Propiedad from "./components/forms/EliminarPropiedad";
import Recuperar from "./components/Recuperar";
import Email from "./components/Email/Email";
import Formdash from './components/forms/Formdash';
import HistorialReservas from './components/Reservas/HistorialReservas';
import ReservaResumen from './components/Reservas/ReservaResumen';
import './animated.css';
import axiosFetch from './config/axiosConfig';


const NavContext = createContext({
  propiedades: {}
});

const DefaultLayout = React.lazy(() => import('./Dashboard/containers/DefaultLayout'));


function App(props) {
  const [authSession, guardarAuthSession] = useState(false);
  console.log(authSession);

  const fetchAPI = async () => {
    const dataAuth = await axiosFetch.get("/authValidate");

    guardarAuthSession(dataAuth.data);
  };

  useEffect(() => {
    fetchAPI();
  }, [authSession]);

  const [filBusqueda, guardarFilBusqueda] = useState({
    titulo: '',
    areamt: '',
    tipo_propiedad: '',
    precio1: '',
    precio2: ''
});

const [resultadoPropiedades, guardarResultadoPropiedades] = useState([]);

    const mostrarDataFiltrada = async (e) => {
      e.preventDefault();
      const data = await axiosFetch.post('/propiedades/filter', filBusqueda)
          .then(res => {
              console.log(res.data)
              return res.data
          }).catch(err => console.log(err))

          console.log(data)
          guardarResultadoPropiedades(data);
  }

 

    return (
      <Router>
        <Fragment>
          <Nav isLoggedIn={authSession} mostrarDataFiltradaFunc={mostrarDataFiltrada} filBusqueda={filBusqueda} guardarFilBusqueda={guardarFilBusqueda} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrar" component={Registro} />
            <Route exact path="/Recuperar" component={Recuperar} />
            <Route exact path="/Pago" component={Pago} />
           {/* <Route exact path="/PropiedadesFiltro" component={PropiedadesFiltro} /> */}
            <Route exact path="/PropiedadesFiltro" render={() => <PropiedadesFiltro filBusqueda={resultadoPropiedades} />} />
            <Route exact path="/propiedad/:id" component={PropiedadesInfo} />
            <Route exact path="/nueva-propiedad" component={Formpropiedades} />
            <Route exact path="/propiedades/eliminar/:id" componet={Propiedad} />
            <Route exact path='/editar-propiedad' component={EditarPropiedad} />

            <Route exact path="/Email" componet={Email} />
            <Route exact path='/Formdash' component={Formdash} />
            <Route exact path='/historial-reservas' component={HistorialReservas} />
            <Route exact path='/reserva/:idReserva' component={ReservaResumen} />
          </Switch>
        </Fragment>
      </Router>
    );
  
}

export default App;
