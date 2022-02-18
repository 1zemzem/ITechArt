import { createStore, applyMiddleware } from "redux"
import { rootReduser } from "./redusers"

export const store = createStore(rootReduser, applyMiddleware(thunk))