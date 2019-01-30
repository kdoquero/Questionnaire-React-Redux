import { combineReducers } from "redux";
import { homeScreenReducer} from "./HomeScreen/reducer"
let combinedReducer = combineReducers({homeScreenReducer,})

export default combinedReducer