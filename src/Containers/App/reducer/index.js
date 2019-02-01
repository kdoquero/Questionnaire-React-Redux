
import * as types from "../../../constants";
const INITIAL_STATE = {
    screen: "HOME",
    indexQuestionnaire:0
}

export const screenReducer = (state = INITIAL_STATE, action) => {
    //console.log(state, action, "screenReducer");
    switch (action.type) {
        case types.CHANGE_SCREEN:
            

            return {
                ...state,
                screen: action.pageName,indexQuestionnaire:action.indexQuestionnaire
            }
        default:
            return state;
            

    }
}