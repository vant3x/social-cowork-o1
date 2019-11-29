import React, { Fragment } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = props => {
  return (
    <Fragment>
      <div id="wrapper" className="wrapper">
        <ul
          className="navbar-nav bg-gradient-3 sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link to={"/dashboard/admin"} 
            className="sidebar-brand d-flex align-items-center justify-content-center"
            
          >
            <div className="sidebar-brand-icon rotate-n-10">
              <i className="fas fa-user-astronaut"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              Admin <sup></sup>
            </div>
          </Link>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <Link to={"/dashboard/admin"} className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Interface</div>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fa-fw fa-building"></i>
              <span>Propiedades</span>
            </a>

            <div
              id="collapseUtilities"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Opciones:</h6>
                <Link
                  to={"/nueva-propiedad"}
                  className="collapse-item"
                  href="utilities-color.html"
                >
                  {" "}
                  <span className="fas fa-plus"></span> Nueva Propiedad
                </Link>
                <Link to="/dashboard/propiedades" className="collapse-item" >
                  {" "}
                  <span className="fas fa-edit"></span> Gestionar Propiedades
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link to={"/historial-reservas"} className="nav-link">
              <i className="fas fa-fw fa-history"></i>
              <span>Historial de Reservas</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/historial-reservas"} className="nav-link">
              <i className="fas  fa-list"></i>
              <span>Aprobar Solicitudes</span>
            </Link>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              {
                props.children
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
