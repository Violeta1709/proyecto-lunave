import React from 'react'
import MenuPrincipal from './MenuPrincipal'
import Fab from '@mui/material/Fab'
import { ArrowBackIosTwoTone } from '@mui/icons-material'
import styles from '../customProyects/DetalleProyecto.module.css'

function DetalleProyecto() {
  return (
    <div>
        
        <MenuPrincipal/>
        <Fab  className={styles.btnatras} size="small"  aria-label="ArrowCircleLeftTwoTone">
        <ArrowBackIosTwoTone />
      </Fab>
      <h1 className={styles.h1titler}> Detalle de proyecto</h1>
      <p className={styles.parp}>Datos generales de proyecto</p>
      
    

    </div>
  )
}

export default DetalleProyecto