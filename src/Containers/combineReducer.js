import { combineReducers } from "redux";
import {screenReducer} from "./App/reducer"
import { questionnaireReducer} from "./QuestionnaireScreen/reducer"
import { userReducer} from "./Form/reducer"


export const combinedReducer = combineReducers({screenReducer,questionnaireReducer,userReducer})

export default combinedReducer