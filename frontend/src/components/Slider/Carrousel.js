import React, { Fragment } from 'react';
import './Carr.css';

class Carrousel extends React.Component {
    render() {
        const color = { color: 'black' }
        const dir = { left: ' 0%' }


        return (

            <Fragment>

                <div id="carouselExampleSlidesOnly" className="carousels slides col-12" data-ride="carosusel">
                    <div className="carousel-inner">

                        <div className="carousels-item active box-center">

                            <img src="img/principal.jpg" className="bg-w" alt="..." />
                            <div className="container">
                                <div className="col-md-6 col-xl-5 md-center md-left">
                                    <div className="carousel-caption box-center">
                                        <div className="card">
                                            <div className="card-body">
                                                <form style={color} name="">
                                                    <h3 className="dark-grey-text text-center">
                                                        <strong>Reserva tu lugar</strong>
                                                    </h3>
                                                    <hr />

                                                    <div className="form-group row">
                                                        <div className="col-12">
                                                            <label htmlFor="form" style={dir}> Lugar</label>
                                                            <input type="text" id="form" className="form-control" placeholder="¿Dónde quieres que sea?" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-6">
                                                            <label htmlFor="form"> Inicio</label>
                                                            <input type="text" id="form" data-veloute="checkin_input" id="checkin_input"
                                                                className="form-control" placeholder="dd/mm/año" />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="form"> Fin</label>
                                                            <input type="text" id="form" data-veloute="checkin_input" id="checkin_input"
                                                                className="form-control" placeholder="dd/mm/año" />
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-info">Buscar</button>
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
}

export default Carrousel;