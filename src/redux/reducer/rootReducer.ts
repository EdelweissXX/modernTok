import { combineReducers } from "redux";
import employee from "./employee";

const reducers = combineReducers(
    {
        fist:employee
    }
)


export default reducers;

