import React from 'react'
import TextField  from '@mui/material/TextField'
import styles from './components/login.module.css'
import axios from 'axios'


// const prueba = () =>{

//     debugger;
//     console.log(prueba);
//     user = document.getElementsByName('user');
//     console.log(JSON.stringify(user))
// };


const Login = () => {

  
const [ usuario, setUsuario ] = React.useState("");
const [contraseña, setContraseña] = React.useState("");

    // debugger;
    // console.log(handleSublime);
    // user = document.getElementById('name');
    // console.log(JSON.stringify(user))
     
    const handleSublime = ()=>{

      const data = {usuario, contraseña};
      axios.post("http://localhost:8080/api/login", data).then((response) => {
        console.log('prueba',response.data)     
        if(usuario  && contraseña){
          document.write('inicio sesion')
         
         }else{
          document.write('error')
         }
      
      } )
    
      
    
 }

    return (



    <div className={styles.divlogin}>


   

<h1>Bienvenido a Lunave</h1>
<TextField 
        className={styles.txtU} 
        id="standard-basic" 
        label="Usuario"
        name='usuario'
        onChange={(e)=> setUsuario(e.target.value)}
    
        variant="standard" />
       <br/>
       <br/>
       <TextField 
       type="password"
       className={styles.txtU} 
       id="standard-basic" 
       label="Contraseña"
       name='contraseña'

       onChange={(e)=> setContraseña(e.target.value)}
       variant="standard" />

       <br/>
      <br/>
      <button  className={styles.btnIngreso}  onClick={handleSublime} >
        Login
      </button>


   

 <footer className={styles.fderehos}>
 <p className={styles.dr}>
  © TODOS LOS DERECHOS RESERVADOS Lunave Multimedios MÉXICO 2023

  </p>
 </footer>
    </div>
  )

 
}

export default Login


