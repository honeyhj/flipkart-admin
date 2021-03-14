// import axios from '../../helpers/axios' 
import {
    authConstants
} from './types';
import axios from 'axios';

export const createUser = (userDetails) => {
    // console.log(userDetails);

    return async (dispatch) => {
        dispatch({
            type: authConstants.ADMIN_REGISTRATION_REQUEST
        })
        const res = await axios.post(`http://localhost:2000/api/adminRegistration`, userDetails);
        if (res.status === 201) {
            dispatch({
                type: authConstants.ADMIN_REGISTRATION_SUCCESS,
                payload: res.data.message
            })
        } else if (res.status === 400) {
            dispatch({
                type: authConstants.ADMIN_REGISTRATION_FAILURE,
                payload: res.data.message
            })
        }
    }
}
export const userLogin = (userDetail) =>{
    return async(dispatch) =>{
        dispatch({
            type: authConstants.ADMIN_LOGIN_REQUEST
        })
        const res = await axios.post(`http://localhost:2000/api/adminLogin`, userDetail);
        console.log(res.status)
        if (res.status === 200) {
            const {token,user} = res.data;
            dispatch({
                type: authConstants.ADMIN_REGISTRATION_SUCCESS,
                payload: {
                    token,
                    user
                }
            })
        } else if (res.status === 400) {
            dispatch({
                type: authConstants.ADMIN_REGISTRATION_FAILURE,
                payload: res.data.message
            })
        }
    }
}