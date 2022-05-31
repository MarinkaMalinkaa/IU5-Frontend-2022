import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { rootReducer } from "./redusers";


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))