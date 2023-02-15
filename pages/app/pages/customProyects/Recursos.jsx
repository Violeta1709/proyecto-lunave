import {ArrowBackIosTwoTone}  from '@mui/icons-material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Fab } from '@mui/material';
import styles from './Recursos.module.css'
import MenuPrincipal from './MenuPrincipal';
import Alert from '@mui/material/Alert';
import DetalleProyecto from './DetalleProyecto';


function Recursos(props) {

    {/*selector */}
const [area, setArea] = React.useState('');

const handleChange = (event) => {
  setArea(event.target.value);
};

{/*selector */}
const [puesto, setPuesto] = React.useState('');

const handleChang = (event) => {
  setPuesto(event.target.value);
};

  return (
    <div className={styles.divtodo}>

      <MenuPrincipal/>
         <Fab  className={styles.btnatras} size="small"  aria-label="ArrowCircleLeftTwoTone">
        <ArrowBackIosTwoTone />
      </Fab>
      <h1 className={styles.h1titler}> Agregar recurso</h1>
      <p className={styles.parp}>Agregar recurso al proyecto</p>
      <p className={styles.subr}>Completa las siguientes datos para agregar un nuevo recurso al proyecto</p>
      {/*selector */}
     <FormControl className={styles.ftarea} variant="standard" sx={{ m: 2, minWidth: 320}}>
        <InputLabel id="demo-simple-select-standard-label">Área</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={area}
          onChange={handleChange}
          label="Area"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Desarrollo</MenuItem>
          <MenuItem value={20}>hghjg</MenuItem>
          <MenuItem value={30}>Pedigree</MenuItem>
        </Select>
      </FormControl>
      {/*fin de selector */}

      {/*selector */}
     <FormControl className={styles.fpuesto} variant="standard" sx={{ m: 2, minWidth: 320}}>
        <InputLabel id="demo-simple-select-standard-label">Puesto</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={puesto}
          onChange={handleChang}
          label="Puesto"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Toyota</MenuItem>
          <MenuItem value={20}>Wiskas</MenuItem>
          <MenuItem value={30}>Pedigree</MenuItem>
        </Select>
      </FormControl>
      
      {/*fin de selector */}
     {/*TextField */}
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className={styles.hasignadas} id="standard-basic" label="Horas asignadas" variant="standard" />
    </Box>
      {/* fin de TextField */}


      <Stack spacing={2} direction="row">
     
     <Button 
     
     onClick={() => {
      console.info("I'm a button.")}}
     className={styles.btn}
    variant="Guardar">Guardar</Button>
     
   </Stack>
   <Alert onClose={() => {}}>This is a success alert</Alert>


    </div>
  )
}

export default Recursos