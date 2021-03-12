// import axios from '../../helpers/axios' 
import { authConstants } from './types';
 import axios from 'axios';

export const createUser = (userDetails) =>{
console.log(userDetails);

    return async(dispatch)=>{
        dispatch({ type:authConstants.ADMIN_REGISTRATION_REQUEST})
       const res= await axios.post(`http://localhost:2000/api/adminRegistration`,userDetails);
       console.log(res);
    }

}