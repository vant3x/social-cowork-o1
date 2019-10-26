import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Pago from "./components/Pago";
import PropiedadesFiltro from "./components/PropiedadesFiltro";
import PropiedadesInfo from "./components/PropiedadesInfo";
import Formpropiedades from "./components/forms/Formpropiedades";
import Dashboard from "./components/Dashboard/Dasboard";
import Dashboardos from "./components/Dashboardos/Dashboardos";
import Edit from "./components/Dashboardos/Edit";
import Loginn from "./components/Dashboardos/Loginn";
import Pages from "./components/Dashboardos/Pages";
import Posts from "./components/Dashboardos/Posts";
import Users from "./components/Dashboardos/Users";
import Recuperar from "./components/Recuperar";
import Email from "./components/Email/Email";
import Formdash from './components/forms/Formdash';
import './animated.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Registro" component={Registro} />
            <Route exact path="/Recuperar" component={Recuperar} />
            <Route exact path="/Pago" component={Pago} />
            <Route exact path="/PropiedadesFiltro" component={PropiedadesFiltro} />
            <Route exact path="/Propiedadesinfo" component={PropiedadesInfo} />
            <Route exact path="/Formpropiedades" component={Formpropiedades} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Dashboardos" component={Dashboardos} />
            <Route exact path="/Edit" componet={Edit} />
            <Route exact path="/Loginn" component={Loginn} />
            <Route exact path="/Pages" component={Pages} />
            <Route exact path="/Posts" component={Posts} />
            <Route exact path="./Users" component={Users} />
            <Route exact path="/Email" componet={Email} />
            <Route exact path='/Formdash' component={Formdash}/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
