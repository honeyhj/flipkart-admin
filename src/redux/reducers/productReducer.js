import { productConstants } from "../actions/types";

const init ={
    loading:false,
    allProducts:[],
    message:'',
    error:''
}
const productReducer = (state = init ,action) =>{
    switch(action.type){
        case productConstants.CREATE_PRODUCT_REQUEST:
            return({
                ...state,
                loading:true
            })
        case productConstants.CREATE_PRODUCT_SUCCESS:
            return({
                ...state,
                loading:false,
                allProducts:action.payload
            })
        case productConstants.CREATE_PRODUCT_FAILURE:
            return({
                ...state,
                loading:false,
                error:action.payload
            })
            default: return state
    }
}
export default productReducer;