import { combineReducers } from "redux";
import { dataReduser } from "./dataReduser";

export const rootReduser = combineReducers({
    data: dataReduser,
})

