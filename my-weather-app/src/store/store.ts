import { createStore, applyMiddleware } from "redux"
import { rootReduser } from "./redusers"
import thunk from "redux-thunk"

export const store = createStore(rootReduser, applyMiddleware(thunk));