
import {decodeToken } from 'react-jwt'

const tokenService = () =>{
    const token = localStorage.getItem('token')

    if(token){

        const decodedToken = decodeToken(token)
        return decodedToken
    }

}

export default tokenService

