import * as types from "../actions/types";
const init = {
    loading:false,
    users:[],
    message:'',
    error:''
}
const userReducer = (state = init, action) => {
    switch(action.type) {
        case types.ADMIN_REGISTRATION_REQUEST:
        return ({
            loading:true,
        })
        case types.ADMIN_REGISTRATION_SUCCESS:
        return ({
            ...state,
            loading:false,
            message:action.payload
        })
        case types.ADMIN_REGISTRATION_FAILURE:
        return ({
            ...state,
            loading:false,
            error:action.payload
        })
        default: return state
    }
}

export default userReducer;