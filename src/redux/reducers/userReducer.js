import {authConstants} from '../actions/types'
const init = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    check:false,
    authenticate:false,
    authenticating:false,
    loading: false,

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
        case authConstants.LOGIN_REQUEST:
            return({
                ...state,
                loading:true,
                authenticating: true
            })
        case authConstants.LOGIN_SUCCESS:
            return({
                ...state,
                loading:false,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            })
            // state = {
            //     ...state,
            //     user: action.payload.user,
            //     token: action.payload.token,
            //     authenticate: true,
            //     authenticating: false
            // }
        case authConstants.LOGOUT_REQUEST:
            return({
                ...state,
                loading: true
            })
            // state = {
            //     ...state,
            //     loading: true
            // }
        case authConstants.LOGOUT_SUCCESS:
            return({
                ...init
            })
            // state = {
            //     ...init
            // }
        case authConstants.LOGOUT_FAILURE:
            return({
                ...state,
                error: action.payload.error,
                loading: false
            })
            // state = {
            //     ...state,
            //     error: action.payload.error,
            //     loading: false
            // }
        default: return state
    }
}

export default userReducer;