import { createStore,applyMiddleware } from "redux";
import {combinedReducer} from "./Containers/combineReducer"
import thunk from "redux-thunk"
/**
 * @function createStore Function de redux pour créer des store;
 * @function combinedReducer Function qui combine des reducer redux,
 */
export const store = createStore(combinedReducer,applyMiddleware(thunk));

 