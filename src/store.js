import { createStore } from "redux";
import {combinedReducer} from "./Pages/combineReducer"

export const store = createStore(combinedReducer);

 