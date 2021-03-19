import axios from "axios"
import { productConstants } from "./types"

export const addProduct = (product) =>{
    return async (dispatch)=>{
        dispatch({
            type:productConstants.CREATE_PRODUCT_REQUEST
        })
        const res = axios.post('http://localhost:2000/api/addProduct')
        console.log(res.data,'jgfd');
        
        // if(res.status === 201){
        //     dispatch({
        //         type:productConstants.CREATE_PRODUCT_SUCCESS,
        //         payload:res.data
        //     })
        // }
    }
}
