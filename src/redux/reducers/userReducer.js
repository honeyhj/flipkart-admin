import {authConstants} from '../actions/types'
const init = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
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
        case authConstants.ADMIN_LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.ADMIN_LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.ADMIN_LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.ADMIN_LOGOUT_SUCCESS:
            state = {
                ...init
            }
            break;
        case authConstants.ADMIN_LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
        default: return state
    }
}

export default userReducer;