import { combineReducers } from "redux";
import { dataReduser } from "./dataReduser";
import { forecastReduser } from "./forecastReduser";

export const rootReduser = combineReducers({
    data: dataReduser,  
    forecast: forecastReduser  
})

export type RootState = ReturnType<typeof rootReduser>