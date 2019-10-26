import React, { Fragment } from 'react';



function Pinfo() {

    const Centrado = { textAlign: 'center' };
    const Color = { color: 'black' }
    const Left = { left: '0%' }

    return (
        <Fragment>
            <div class="container">
                <div class="row">
                    <div class="col mt-4">
                        <h2 style={Centrado}>Oficina
</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 mt-4">
                        <h4>Descripcion</h4>
                        <h7>
                        Una gran oficina con sofas y mesas, muy buena iluminación y conexión veloz a internet


          </h7>
                    </div>
                    <hr />
                    <hr />
                    <hr />
                    <div class="col-6 mt-4">
                        <h4>Servicios que incluye</h4>
                        <ul>
                            <li>Wifi</li>
                            <li>Computadoras</li>
                            <li>Videobeam</li>
                        </ul>
                    </div>

                    <div class="col-6 mt-4 ">
                        <div class="container ">
                            <div class="row">
                                <div class="col ">
                                    <div class="card ">
                                        <div class="card-body">
                                            <form style={Color} name="">
                                                <h3 class="dark-grey-text text-center" style={Centrado}>
                                                    <strong style={Centrado}>Reserva ya</strong>
                                                </h3>


                                                <div class="form-group row">
                                                    <div class="col-6">
                                                        <label for="form"> Inicio</label>
                                                        <input type="text" id="form" data-veloute="checkin_input" id="checkin_input"
                                                            class="form-control" placeholder="dd/mm/año" />
                                                    </div>
                                                    <div class="col-6">
                                                        <label for="form"> Fin</label>
                                                        <input type="text" id="form" data-veloute="checkin_input" id="checkin_input"
                                                            class="form-control" placeholder="dd/mm/año" />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-12">
                                                        <label for="form" style={Left}> Numero de personas</label>
                                                        <input type="text" id="form" class="form-control" />
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Reserva</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Pinfo;