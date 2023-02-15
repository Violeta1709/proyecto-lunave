import React from 'react'
import MenuPrincipal from './MenuPrincipal'
import Proyect from '../Proyectos/Proyect'
import styles from '../customProyects/ViewProyect.module.css'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
function ViewProyect() {
  return (
    <>
    <div>
        <MenuPrincipal/>
        <h1 className={styles.h1titlep}>Proyectos</h1>
        <Proyect/> 
       
    </div>
    <Fab className={styles.plus2} size="small"  aria-label="add">
        <AddIcon />
      </Fab>
    </>
  )
}

export default ViewProyect