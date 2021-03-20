import { categoryConstants } from "../actions/types"

const init  = {
    loading:false,
    allCategories:[],
    message:'',
    error:''
}
// const buildCategories = (categories) =>{
//     console.log(categories.parentId,'printed');
    
// }
const categoryReducer = (state = init , action) =>{
    switch(action.type) {
        case categoryConstants.CREATE_CATEGORY_REQUEST:
            return{
                ...state,
                loading:true
            }
        case categoryConstants.CREATE_CATEGORY_SUCCESS:
            // const category = action.payload.categoryList
            //  const categories = buildCategories(category)
            return{
                ...state,
                loading:false,
                message:action.payload
            }
        case categoryConstants.CREATE_CATEGORY_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case categoryConstants.GET_CATEGORY_REQUEST:
            return{
                ...state,
                loading:true
            }
        case categoryConstants.GET_CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                allCategories:action.payload.categoryList
            }
        case categoryConstants.GET_CATEGORY_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
            default: return state
    }
}
export default categoryReducer;
