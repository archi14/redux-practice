import { combineReducers } from "redux";
import NumberReducer from './NumberReducer';

export default combineReducers({
    number: NumberReducer
})


