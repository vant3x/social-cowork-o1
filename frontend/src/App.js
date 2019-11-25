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
import Recuperar from "./components/Recuperar";
import Email from "./components/Email/Email";
import Formdash from './components/forms/Formdash';
import HistorialReservas from './components/Reservas/HistorialReservas';
import './animated.css';
import axiosFetch from './config/axiosConfig';


const NavContext = createContext({
  propiedades: {}
});

function App (props) {
 
  const [authSession, guardarAuthSession] = useState(false);
  console.log(authSession);

  const fetchAPI = async () => {
    const dataAuth = await axiosFetch.get('/authValidate');
  
    guardarAuthSession(dataAuth.data);
  }

  useEffect(() => {
    fetchAPI();
  }, [authSession]);

    return (
      <Router>
        <Fragment>
          <Nav isLoggedIn={authSession} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrar" component={Registro} />
            <Route exact path="/Recuperar" component={Recuperar} />
            <Route exact path="/Pago" component={Pago} />
            <Route exact path="/PropiedadesFiltro" component={PropiedadesFiltro} />
            <Route exact path="/propiedad/:id" component={PropiedadesInfo} />
            <Route exact path="/nueva-propiedad" component={Formpropiedades} />
            <Route exact path="/Email" componet={Email} />
            <Route exact path='/Formdash' component={Formdash} />
            <Route exact path='/historial-reservas' component={HistorialReservas} />
          </Switch>
        </Fragment>
      </Router>
    );
  
}

export default App;
