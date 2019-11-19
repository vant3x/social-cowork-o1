import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/sb-admin-2.css";
import axiosFetch from "../config/axiosConfig";

function Login() {

  const [usuario, guardarUsuario] = useState({
      email: '',
      password: ''
  });

  const actualizarState = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    });
    console.log(usuario);
  }

  const iniciarSesion = e => {
    e.preventDefault();

    axiosFetch.post('/login', usuario);
    console.log(usuario);
  }


  //const activarLoginFake = localStorage.setItem()

  return (
    <Fragment>
      <div>
        <div className="container">
          <div className="row justify-content-center animated fadeIn">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Bienvenido a Social CoWork
                          </h1>
                        </div>
                        <form className="user" onSubmit={iniciarSesion}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              name="email"
                              onChange={actualizarState}
                              aria-describedby="emailHelp"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                              name="password"
                              onChange={actualizarState}
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                Recuerdame
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                          <hr />
                          <a
                            href="index.html"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i> Login con
                            Google
                          </a>
                       
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="/Recuperar">
                            Olvide Mi Contraseña
                          </a>
                        </div>
                        <div className="text-center">
                          <Link
                            to={"/Registro"}
                            className="small"
                            href="/Registro2"
                          >
                            Registrarme
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Login;
