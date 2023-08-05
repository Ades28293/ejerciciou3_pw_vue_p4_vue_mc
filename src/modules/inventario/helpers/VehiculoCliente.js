

import axios from "axios"


export const obtenerVehiculoFachada=async (placa)=>{
   
    return await obtenerEstudianteAPIAxios(placa);

}  

export  const obtenerTodosVehiculoFachada=async()=>{
   return await obtenerTodosVehiculoFachadaAPIAxios();
}  


const obtenerVehiculoAPIAxios=async(cedula)=>{

const data= axios.get(`http://localhost:8080/API/v1.0/Inventario/vehiculos/${placa}`).then(r=>r.data);

return data;

}  

const obtenerTodosVehiculoFachadaAPIAxios=async(cedula)=>{

    const data= axios.get(`http://localhost:8080/API/v1.0/Inventario/vehiculos`).then(r=>r.data);
    
    return data;
    
    }  