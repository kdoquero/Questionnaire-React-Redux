import { combineReducers } from "redux";
import { homeScreenReducer} from "./HomeScreen/reducer"
import { questionnaireReducer} from "./QuestionnaireScreen/reducer"

export const combinedReducer = combineReducers({homeScreenReducer,questionnaireReducer})

export default combinedReducer