import React from 'react'


export const Login1 = () => {
    return ( 
        <center>
        <div className="container" style={{width:"70%", marginTop:20, background:"#A8BCFF", paddingTop:20, paddingBottom:30, paddingLeft:20, paddingRight:20}}>
          <form id="miFormulario">
            <h1 style={{marginBottom:20}}>Gestion de paquetes InstaYA Login</h1>
           
            <input type="text" placeholder="Digite su usuario" className="form-control form-control-lg" style={{textAlign:"center"}} value=""  required/><br/>
            
            <input type="password" placeholder="Digite su contraseña" className="form-control form-control-lg" style={{textAlign:"center"}} value=""  required/><br/>
            
           
            <button className="btn btn-primary btn-lg">Login</button>
          </form>
        </div>
      </center>   
      
    )
}
