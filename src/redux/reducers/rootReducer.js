import { combineReducers } from "redux";
import userReducer from './userReducer'
import categoryReducer from './categoryReducer'
import productReducer from "./productReducer";
const rootReducer = combineReducers({
    user:userReducer,
    categories:categoryReducer,
    product:productReducer,
})
export default rootReducer;