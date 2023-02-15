import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../login/components/login.module.css'
import { Box } from '@mui/system';

function SignUp() {
  return (
    <div className={styles.divlogin}>
        <h1>Lunave</h1>
        <p>Ingresa nombre de usuario para recuperar contraseña</p>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField id="standard-basic" label="   Usuario   " variant="standard" />
    </Box>
       <br/>
      <br/>
       <Button className={styles.btnIngreso} variant="outlined" color="primary">
  Recuperar Contraseña
       </Button>
    </div>
  )
}

export default SignUp