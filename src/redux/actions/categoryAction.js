import axios from "axios";
import { categoryConstants } from "./types";

export const createCategory = (categoryDetails) => {
    return async (dispatch) => {
        dispatch({
            type: categoryConstants.CREATE_CATEGORY_REQUEST
        })
        const res = await axios.post(`http://localhost:2000/api/addCategory`, categoryDetails);
        if (res.status === 201) {
            dispatch({
                type: categoryConstants.CREATE_CATEGORY_SUCCESS,
                payload: res.data.message
            })
        } else if (res.status === 400) {
            dispatch({
                type: categoryConstants.CREATE_CATEGORY_FAILURE,
                payload: res.error.message
            })
        }
    }
}
export const getCategories = () => {
    return async (dispatch) => {
        dispatch({
            type: categoryConstants.GET_CATEGORY_REQUEST
        })
        const res = await axios.get(`http://localhost:2000/api/getCategories`,);
        if (res.status === 200) {
            dispatch({
                type: categoryConstants.GET_CATEGORY_SUCCESS,
                payload: res.data
            })
        } else if (res.status === 400) {
            dispatch({
                type: categoryConstants.GET_CATEGORY_FAILURE,
                payload: res.error.message
            })
        }
    }
}