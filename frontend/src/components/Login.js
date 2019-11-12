import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./css/sb-admin-2.css";
import Swal from "sweetalert2";
import usuarioAxios from "../config/axiosConfig";

function Login() {
  const [credenciales, guardarCredenciales] = useState({});

  //Iniciar sesion en el servidor
  const loguear = async e => {
    e.preventDefault();

    //autenticar el usuario
    try {
      const respuesta = await usuarioAxios.post("/login", credenciales);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        type: "Error",
        title: "Error, Usuario no registrado",
        text: error.response.data.mensaje
      });
    }
  };

  const leerDatos = e => {
    guardarCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div>
        <div className="container">
          <form onSubmit={loguear}>
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
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="email"
                                required
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                onChange={leerDatos}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                required
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                                onChange={leerDatos}
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
                              value="iniciar sesion"
                              className="btn btn-primary btn-user btn-block"
                            >
                              Login
                            </button>
                            <Link to="/" id="redirect"></Link>
                            <hr />
                            <a
                              href="index.html"
                              className="btn btn-google btn-user btn-block"
                            >
                              <i className="fab fa-google fa-fw"></i> Login con
                              Google
                            </a>
                            <a
                              href="index.html"
                              className="btn btn-facebook btn-user btn-block"
                            >
                              <i className="fab fa-facebook-f fa-fw"></i> Login
                              con Facebook
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
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default Login;
