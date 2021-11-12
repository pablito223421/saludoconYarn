import React from "react";


export default function Saludar(props) {
  const saludar=() =>{
    console.log (props);
  };
    
    return(
   <div>     
  <button onClick={props.saludarFn(props.userInfo.nombre)}>Saludar</button>
  </div>
    );

   
}