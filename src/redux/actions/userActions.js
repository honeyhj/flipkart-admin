import axios from "axios"

export const createUser = (userDetails) =>{
    return async(dispatch)=>{
        await axios.post(`/userRegistration`)
    }
}