import { createStore, applyMiddleware } from "redux"
import { rootReduser } from "./redusers"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));