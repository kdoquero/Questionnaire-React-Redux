import * as types from "../../../constants"
const INITIAL_STATE = {
    theme:"",
    currentQuestion:0,
    score:0,
    questions: new Array(1).fill("")
}

export const questionnaireReducer = (state=INITIAL_STATE,action)=> {
    switch (action.type) {
        case types.CHANGE_SCREEN:
            return {
                ...state
            }
            break;

        default:
            return {
                state
            }
            break;
    }
}

export default {
    questionnaireReducer
}