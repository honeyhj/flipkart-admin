import axios from "axios"
import { productConstants } from "./types"

export const addProduct = (product) =>{
    return async (dispatch)=>{
        dispatch({
            type:productConstants.CREATE_PRODUCT_REQUEST
        })
        const res = axios.post('http://localhost:2000/api/addProduct',product)
        if(res.status === 201){
            dispatch({
                type:productConstants.CREATE_PRODUCT_SUCCESS,
                payload:res.data
            })
        } 
        else if (res.status === 400) {
            dispatch({
                type: productConstants.CREATE_PRODUCT_FAILURE,
                payload: res.error.message
            })
        }
    }
}
