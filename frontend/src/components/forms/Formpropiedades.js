import React,{Fragment, useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import axiosFetch from '../../config/axiosConfig';

import './form.css';


function Formpropiedades(history){

    const [tipoPropiedades, guardarTipoPropiedades] = useState([]);

    const fetchAPI = async () => {
        const tiposPropiedadesData = await axiosFetch.get('/tipo-propiedades');

        setTimeout(() => {
            guardarTipoPropiedades(tiposPropiedadesData.data);
        }, 300);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    //propiedad=state

     const [propiedad,guardarPropiedad]=useState({
         
        titulo:'',
        descripcion:'',
        precio:'',
        sector:'',
        direccion:'',
        area:'',
        banios:'',
        img1:'',
        img2:'',
        habitaciones:'',
        tipoPropiedadId:''
     });

     //leer los datos del formulario

     const actualizarState= e =>{
         //almacenar lo que el usuario escribe en el state 
         guardarPropiedad({
             //copia estado actual 
             ...propiedad,
             [e.target.name]:e.target.value
         });
         console.log(propiedad)

     }

     

     const validarPropiedad=()=>{
         const{  titulo, descripcion,precio,sector,direccion, area,banios,img1,img2,habitaciones,tipoPropiedadId }=propiedad;

         //revisar que tengan contenido
         let valido= !titulo || !descripcion.length ||!precio.length ||!sector.length ||!direccion.length || !area.length 
         || !banios.length|| !img1.length || !img2.length || !habitaciones.length || !tipoPropiedadId.length ;

         return valido;

     }

   //aññade una nueva propiedad en la REST API 

   const agregarPropiedadApi =(e) =>{
    e.preventDefault();
   //alejoooooo
    axiosFetch.post('/nueva-propiedad',propiedad)
    
    .then(res=>{
        //validar si hay errores
        
            console.log('Error de duplicado en DB');
            Swal.fire({
                type:'error',
                tittle:'hubo un error ',
                text:'la propiedad ya esta registrada '
            }).catch(() => {
      
                console.log(res);
                Swal.fire(
                    'se agrego la propiedad',
                    `${res.data.mensaje}`,
                    'success'
                );
            }) 
        //redireccionar
        history.push('/');
    });
}


    const ancho={width:'500px'}

    return(
        <Fragment>
        <div className="mx-auto" style={ancho}>
          <div className="container center-block ">
            <div className="row">
                <div className="col">
                <form  className="mt-3" onSubmit={agregarPropiedadApi}>
                    <h2>Registra tu inmueble</h2>
                    <hr />
                    <div className="row">
                            <div className="col">
                                

                                    <label for="banios">Tipo</label>
                                    <select name="tipoPropiedadId" id="titulo" className="custom-select mb-3" onChange={actualizarState}>
                                        {
                                            tipoPropiedades.map(tipoPropiedad =>(
                                                <option value= {tipoPropiedad.id} key={tipoPropiedad.id} > {tipoPropiedad.nombre}</option>
                                            ))
                                        }
                                        
                                    </select>
                                
                            </div>
                            </div>
                        
                        


                    <div className="form-group">
                            <label for="precio">Precio</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Indicanos el valor de alquiler del inmueble"
                            name="precio"
                            id="precio"
                            onChange={actualizarState}
                            />
                        </div>
                    <div className="form-group">
                    <label for="sector">Sector</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="¿En qué sector esta ubicado?"
                        name="sector"
                        id="sector"
                        onChange={actualizarState}
                    />
                    </div>
                    <div className="form-group">
                    <label for="direccion">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección"
                        name="direccion"
                        id="direccion"
                        onChange={actualizarState}
                    />
                    </div>
                    <div className="form-group">
                            <label for="area">Área</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Indicanos el área en metros cuadrados"
                            name="area"
                            id="area"
                            onChange={actualizarState}
                            />
                        </div>

                        <div className="row">
                            <div className="col">
                                    <label for="banios">Baños</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="número de baños"
                                        name="banios"
                                        id="banios"
                                        onChange={actualizarState}>
                                    
                                    </input>
                            </div>
                        </div>
                    <div className="form-group">
                    <label for="img_principal">Imagen principal</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sube la imagen principal"
                        name="img1"
                        id="img_principal"
                        onChange={actualizarState}
                    />
                    <div className="form-group">
                            <label for="img_sec">Imagen dos</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Sube otra imagen"
                            name="img2"
                            id="img_sec"
                            onChange={actualizarState}
                            />
                        </div>
                        <div className="row">
                                <div className="col">
                                    <label for="habitaciones">Habitaciones</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="habitaciones"
                                        name="habitaciones"
                                        id="habitaciones"
                                        onChange={actualizarState}>
                                    
                                    </input>
                            
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="descripcion">Descripción</label>
                                <textarea name="descripcion" id="descripcion" className="form-control" onChange={actualizarState}></textarea>
                            </div>


                    
                    <div className="custom-control">
                        <label className="form-check-label" ></label>
                        <input type="checkbox" name="terminos" id="terminos" className="form-check-input mr-2"  onChange={actualizarState}/>Acepto Terminos y Condiciones
                    
                    </div>
                    <button type="submit" className="btn btn-primary" >Enviar</button>
                    
                
        </div>
        </form>

      </div>
    </div>
    </div>
    </div>
    


        </Fragment>

    )
}


export default Formpropiedades;


