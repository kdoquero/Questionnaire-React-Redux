import { createStore,applyMiddleware } from "redux";
import {combinedReducer} from "./Containers/combineReducer"
import thunk from "redux-thunk"
export const store = createStore(combinedReducer,applyMiddleware(thunk));

 