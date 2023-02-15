import axios from "axios"




const apiPrueba = axios.create({
    baseURL: 'http://localhost:8080/api'

})


export default apiPrueba;

