import {authConstants} from '../actions/types'
const init = {
    loading:false,
    users:[],
    message:'',
    auth:{
        token:""
    },
    error:''
}
const userReducer = (state = init, action) => {
    switch(action.type) {
        case authConstants.ADMIN_REGISTRATION_REQUEST:
        return ({
            loading:true,
        })
        case authConstants.ADMIN_REGISTRATION_SUCCESS:
        return ({
            ...state,
            loading:false,
            message:action.payload
        })
        case authConstants.ADMIN_REGISTRATION_FAILURE:
        return ({
            ...state,
            loading:false,
            error:action.payload
        })
        default: return state
    }
}

export default userReducer;