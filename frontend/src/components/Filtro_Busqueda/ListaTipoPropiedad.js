import React from 'react';

function ListaTipoPropiedadd(props) {
    return(
            <option className="dropdown-item" type="button">
                 {props.tipoPropiedadProp.nombre}
            </option>   
    )
}

export default ListaTipoPropiedadd;