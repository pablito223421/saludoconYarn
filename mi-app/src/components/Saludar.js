import React from "react";


export default function Saludar(props) {
    console.log(props.userInfo.nombre);
    console.log(props.userInfo.edad);
    console.log(props.userInfo.color);
    return(
        
    <p>Mi nombre es: {props.userInfo.nombre} y tengo {props.userInfo.edad} años
    y mi colo favorito es el {props.userInfo.color}</p>
    );

   
}