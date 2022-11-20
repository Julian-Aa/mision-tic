

import React, { useState, useEffect } from 'react'

export const RegOrdenes = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { titulo, estilo, tecnica, precio }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );



  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setTecnica("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  }


  return (
    

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
       Gestion de paquetes InstaYA Registro de Ordenes (Recogida)
      <br/>
      <form id="miFormulario" onSubmit={ botonGuardar } >
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Fecha"  onChange={(e) => setTitulo(e.target.value)}  required  />
          </div>

          <div className="col-6">
          <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Hora"  onChange={(e) => setPrecio(e.target.value)}  required  />
            
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Direccion de recogida"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Ciudad de recogida"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
        </div>
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Nombre del destinatario"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Cedula/Nit destinatario"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
        </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
          <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Direccion de Entrega"  onChange={(e) => setPrecio(e.target.value)}  required  />
              
            
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Ciudad de Entrega"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
        </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Crear Orden</button>
          </div>
        </div>
      </form>
    </div>
            
  </div>




  )
}
